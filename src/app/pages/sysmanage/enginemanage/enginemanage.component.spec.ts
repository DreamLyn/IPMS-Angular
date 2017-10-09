import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginemanageComponent } from './enginemanage.component';

describe('EnginemanageComponent', () => {
  let component: EnginemanageComponent;
  let fixture: ComponentFixture<EnginemanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnginemanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnginemanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
