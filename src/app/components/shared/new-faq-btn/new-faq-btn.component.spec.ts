import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFaqBtnComponent } from './new-faq-btn.component';

describe('NewFaqBtnComponent', () => {
  let component: NewFaqBtnComponent;
  let fixture: ComponentFixture<NewFaqBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFaqBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFaqBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
