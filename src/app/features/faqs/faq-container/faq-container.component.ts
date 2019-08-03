import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-faq-container',
  templateUrl: './faq-container.component.html',
  styleUrls: ['./faq-container.component.css']
})
export class FaqContainerComponent implements OnInit {


  public faqs = [];

  constructor(
    private faqsService: FaqService
  ) { }

  ngOnInit() {
    this.faqs = this.faqsService.getFaqs();
  }

}
