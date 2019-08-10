import { Component, OnInit, Input } from '@angular/core';
import { Faq } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faq-preview-item',
  templateUrl: './faq-preview-item.component.html',
  styleUrls: ['./faq-preview-item.component.css']
})
export class FaqPreviewItemComponent implements OnInit {

  @Input() faq: Faq;

  constructor() { }

  ngOnInit() {
  }

}
