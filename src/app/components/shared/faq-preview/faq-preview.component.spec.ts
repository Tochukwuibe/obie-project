import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqPreviewComponent } from './faq-preview.component';

describe('FaqPreviewComponent', () => {
  let component: FaqPreviewComponent;
  let fixture: ComponentFixture<FaqPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
