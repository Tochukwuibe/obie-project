import { Component, OnInit, Input } from '@angular/core';
import { Faq } from 'src/app/services/faq.service';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {

  @Input() faq: Faq;

  public isCollapsed = true;


  constructor() { }

  ngOnInit() {

  }

}
