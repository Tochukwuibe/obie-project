import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteActionsComponent } from './edit-delete-actions.component';

describe('EditDeleteActionsComponent', () => {
  let component: EditDeleteActionsComponent;
  let fixture: ComponentFixture<EditDeleteActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeleteActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
