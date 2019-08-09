import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-faq-btn',
  templateUrl: './new-faq-btn.component.html',
  styleUrls: ['./new-faq-btn.component.css']
})
export class NewFaqBtnComponent implements OnInit {


  @Output('clicked') clicked =  new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}
