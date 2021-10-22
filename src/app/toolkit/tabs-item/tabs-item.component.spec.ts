import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsItemComponent } from './tabs-item.component';

describe('TabsItemComponent', () => {
  let component: TabsItemComponent;
  let fixture: ComponentFixture<TabsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
