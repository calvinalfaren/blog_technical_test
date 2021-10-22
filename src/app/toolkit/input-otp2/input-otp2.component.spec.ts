import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOtp2Component } from './input-otp2.component';

describe('InputOtp2Component', () => {
  let component: InputOtp2Component;
  let fixture: ComponentFixture<InputOtp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOtp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOtp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
