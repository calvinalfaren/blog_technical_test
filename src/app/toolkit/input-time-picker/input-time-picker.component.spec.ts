import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTimePickerComponent } from './input-time-picker.component';

describe('InputComponent', () => {
  let component: InputTimePickerComponent;
  let fixture: ComponentFixture<InputTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
