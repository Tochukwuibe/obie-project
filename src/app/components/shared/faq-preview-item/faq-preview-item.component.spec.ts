import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqPreviewItemComponent } from './faq-preview-item.component';

describe('FaqPreviewItemComponent', () => {
  let component: FaqPreviewItemComponent;
  let fixture: ComponentFixture<FaqPreviewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqPreviewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqPreviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
