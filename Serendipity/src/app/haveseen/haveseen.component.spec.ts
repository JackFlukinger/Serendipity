import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveseenComponent } from './haveseen.component';

describe('HaveseenComponent', () => {
  let component: HaveseenComponent;
  let fixture: ComponentFixture<HaveseenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaveseenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaveseenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
