import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Faq } from 'src/app/services/faq.service';

@Component({
  selector: 'app-question-block',
  templateUrl: './question-block.component.html',
  styleUrls: ['./question-block.component.css']
})
export class QuestionBlockComponent implements OnInit {

  @Input('faq') faq: Faq;
  @Output('action') action = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  public onAction(action) {
    this.action.emit(action)
  }

}
