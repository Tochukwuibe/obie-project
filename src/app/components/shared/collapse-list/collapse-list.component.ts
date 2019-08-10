import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Faq } from 'src/app/services/faq.service';

@Component({
  selector: 'app-collapse-list',
  templateUrl: './collapse-list.component.html',
  styleUrls: ['./collapse-list.component.css']
})
export class CollapseListComponent implements OnInit {

  @Input() faqs: Faq[];
  @Input('onToNew') onToNew: Function;

  constructor() { }

  ngOnInit() {

  }




  

  
}
