import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditFaqComponent } from './create-edit-faq.component';

describe('CreateEditFaqComponent', () => {
  let component: CreateEditFaqComponent;
  let fixture: ComponentFixture<CreateEditFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
