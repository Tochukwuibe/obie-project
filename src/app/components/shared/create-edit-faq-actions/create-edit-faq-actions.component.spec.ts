import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditFaqActionsComponent } from './create-edit-faq-actions.component';

describe('CreateEditFaqActionsComponent', () => {
  let component: CreateEditFaqActionsComponent;
  let fixture: ComponentFixture<CreateEditFaqActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditFaqActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditFaqActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
