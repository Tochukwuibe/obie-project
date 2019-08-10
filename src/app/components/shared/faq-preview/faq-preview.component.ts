import { Component, OnInit, Input } from '@angular/core';
import { Faq } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faq-preview',
  templateUrl: './faq-preview.component.html',
  styleUrls: ['./faq-preview.component.css']
})
export class FaqPreviewComponent implements OnInit {

  @Input() faqs: Faq[];

  constructor() { }

  ngOnInit() {
  }

}
