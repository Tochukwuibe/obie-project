import { Component, OnInit, Input } from '@angular/core';
import { Faq } from 'src/app/services/questions.service';

@Component({
  selector: 'app-collapse-list',
  templateUrl: './collapse-list.component.html',
  styleUrls: ['./collapse-list.component.css']
})
export class CollapseListComponent implements OnInit {

  @Input() faqs: Faq[];

  constructor() { }

  ngOnInit() {
  }

}
