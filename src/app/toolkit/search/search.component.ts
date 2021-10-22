import { AuthService } from './../../auth.service';
import { SearchService } from './search.service';
import { Component, OnInit, HostListener, Output, EventEmitter,
    Input,ViewEncapsulation } from '@angular/core';
import { Field } from "./../field";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None, 
  providers: [SearchService, AuthService]
})
export class SearchComponent extends Field<string> implements OnInit {

  @Input()
  placeholder : string;

  @Input()
  url : string;

  @Input()
  isAuthKeyNeeded : boolean = true;
  
  data : SearchItemResponse[] = [];

  @Input()
  text : string = null;

  @Output()
  textChange : EventEmitter<string> = new EventEmitter<string>();

  @Input()
  disabledData : string[] = [];

  noResultFound : boolean = false;

  constructor(private searchService : SearchService, private authService : AuthService) { 
    super();
  }

  ngOnInit() {
    
  }

  handleInputValueChange(text : string) {
    this.setText(text);
    this.getData();
  }

  getData() {
    let token : string=  (this.isAuthKeyNeeded) ? this.authService.getToken() : null;
    this.searchService.getData(this.url, this.text, token).subscribe(
      this.handleGetData.bind(this)
    )
    
  }

  getDataKeys() : string[] {
    let values : string[] = [];
    this.data.forEach((itemReponse, index) => {
      values.push(itemReponse.value);
    });

    return values;
  }

  handleGetData(response : SearchResponse) {
    this.data = response.data;
    this.noResultFound = this.data.length === 0;
  }

  triggerDropdownItemClick(value : string) {
    if(this.isDataDisabled(value)) {
      return;
    }
    this.setValue(value);
    this.setText(this.findItem(value).text);
    this.clearData();
  }

  findItem(value) : SearchItemResponse {
    for(let item of this.data) {
      if(item.value === value) {
        return item;
      }
    }

    return null;
  }

  clearData() {
    this.data = [];
  }

  refreshData(event : Event) {
    this.clearData();
    this.setValue(null);
    this.setText(null);
    this.getData();
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event : Event) {
    if(event.target && !(<HTMLElement>event.target).closest(".search-dropdown-item")) {
      this.clearData();
      this.noResultFound = false;
    }
  }

  isDataDisabled(key : string) : boolean {
    return this.disabledData.indexOf(key) !== -1;
  }

  setText(text : string) {
    this.text = text;
    this.textChange.emit(text);
  }
}

export class SearchResponse {
  status : boolean;

  data : SearchItemResponse[];
}

export class SearchItemResponse {
  text : string;

  value : string;
}