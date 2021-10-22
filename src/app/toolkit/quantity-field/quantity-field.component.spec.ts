import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityFieldComponent } from './quantity-field.component';

describe('QuantityFieldComponent', () => {
  let component: QuantityFieldComponent;
  let fixture: ComponentFixture<QuantityFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
