import { Component, OnInit, Input } from '@angular/core';
import { Faq } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  @Input() faqs: Faq[];

  private preview: Faq[];

  constructor() { }

  ngOnInit() {
    this.preview = (this.faqs || []).slice(0, 5)
  }

}