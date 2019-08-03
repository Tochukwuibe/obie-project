import { Component, OnInit, Input } from '@angular/core';
import { Faq } from 'src/app/services/questions.service';

@Component({
  selector: 'app-question-block',
  templateUrl: './question-block.component.html',
  styleUrls: ['./question-block.component.css']
})
export class QuestionBlockComponent implements OnInit {

  @Input() faq: Faq;

  constructor() { }

  ngOnInit() {
  }

}
