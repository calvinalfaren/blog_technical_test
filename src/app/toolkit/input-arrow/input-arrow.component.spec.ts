import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputArrowComponent } from './input-arrow.component';

describe('InputComponent', () => {
  let component: InputArrowComponent;
  let fixture: ComponentFixture<InputArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
