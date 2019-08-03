import { Component, OnInit, Input } from '@angular/core';
import { Faq } from 'src/app/services/questions.service';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {

  @Input() faq: Faq;


 

  constructor() { }

  ngOnInit() {
    
  }

}
