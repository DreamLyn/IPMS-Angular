import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltermanageComponent } from './filtermanage.component';

describe('FiltermanageComponent', () => {
  let component: FiltermanageComponent;
  let fixture: ComponentFixture<FiltermanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltermanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltermanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
