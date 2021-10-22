import { ButtonComponent } from './../button/button.component';
import { AuthService } from './../../auth.service';
import { FormService } from './form.service';
import { Component, ContentChildren, ContentChild,
   OnInit, QueryList, AfterViewInit, Input, ViewEncapsulation,
  Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Field } from "./../field";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [FormBuilder, FormService, AuthService ]
})
export class FormComponent implements OnInit {

  public form : FormGroup;

  @ContentChildren('field', { descendants: true})
  fields : QueryList<Field<any>>;

  @ContentChild('submit')
  submitBtn : ButtonComponent;

  @Input()
  url : string;

  @Input()
  authKeyNeeded : boolean = true;

  @Input()
  method : string = "post";

  @Input()
  formErrors : Object;

  @Input()
  validationMessages : Object;

  @Input()
  rules : Object;

  @Output()
  successForm : EventEmitter<any> = new EventEmitter<any>();

  @Output()
  successValidation : EventEmitter<any> = new EventEmitter<any>();

  @Input()
  flatObject : boolean = true;

  @Input()
  formClass : string = "";

  formErrorMessage : string = "";

  constructor(protected fb : FormBuilder, protected formService : FormService, 
              protected authService : AuthService) { }

  ngOnInit() {
    this.buildForm();
  }

  @Input()
  customRules: any;

  buildForm() {
    this.form = new FormGroup({});
    this.form = this.fb.group(this.rules, this.customRules);
  }

  updateFormValue() : void {
    let object : Object = {};
    for(let field of this.fields.toArray()) {
      this.form.controls[field.getName()].setValue(field.getValue());
    }

  }
  
  emptyAllFieldErrors() {
    for(let field of this.fields.toArray()) {
      field.setErrorMessage("");
    }

  }



  validate() : boolean {
      if(!this.form) {
          return false;
      }
      this.form = this.fb.group(this.rules, this.customRules);
      this.emptyAllFieldErrors();
      this.updateFormValue();

      for(let field of this.fields.toArray()) {
          const control = this.form.get(field.getName());
          // console.log(field.getName() + " " + control.valid);
          if(control &&  !control.valid) {
              let messages = this.validationMessages[field.getName()];
              for(let key in control.errors) {
                  field.setErrorMessage(messages[key] + ' ' );
              }
          }
      }
      return this.form.valid;
  }

  submit() {
    let valid : boolean = this.validate();

    if(valid) {
      this.successValidation.emit(this.createObject());

    }
  }

  createObject() : any {
    let object = new Object();
    for(let key in this.form.value) {
      if(!this.form.value.hasOwnProperty(key)) {
        break;
      }
      //array
      if(this.form.value[key] && this.form.value[key].constructor == Array) {
        let values : any[] = this.form.value[key];
        if(this.flatObject) {

          for(let value of values) {
              object[key + "[]"] = value;
          }
        }
        else {
          object[key] = (values);
        }

      } else {
        object[key] = this.form.value[key];
      }
    }

    return object;
  }

  handleNonErrorResponse(data : Object) {
    this.submitBtn.setDisabled(false);
    if(!this.hasError(data)) {
      this.successForm.emit(data);
    } else {
      this.processError(data);
    }
  }

  hasError(data) {
    return !data.hasOwnProperty('status');
  }


  handleError(data : Object) {
    // console.log(data);
    this.submitBtn.setDisabled(false);
  }

  getFieldByName(name : string) : Field<any> {
    for(let field of this.fields.toArray()) {
      if(field.getName() == name) {
        return field;
      }
    }
    return null;
  }

  processError(errors : Object) {
    for(let prop in errors) {
      let field : Field<any> = this.getFieldByName(prop);
      if(!field) {
        break;
      }
      if(errors[prop] instanceof Object) {
        field.setErrorMessage(errors[prop][0]);
      } else {
        field.setErrorMessage(errors[prop]);
      }
    }

    if(this.hasError(errors)) {
      this.formErrorMessage = errors["error"] ;
    }
  }
}
