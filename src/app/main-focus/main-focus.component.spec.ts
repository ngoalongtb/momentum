import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFocusComponent } from './main-focus.component';

describe('MainFocusComponent', () => {
  let component: MainFocusComponent;
  let fixture: ComponentFixture<MainFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
