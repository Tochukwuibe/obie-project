import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {

 @Input('question') question: string;
 @Input('answer') answer: string;

 @Input('id') id: string;

 public heading: string;
 public collapse: string;
 

  constructor() { }

  ngOnInit() {
    this.heading = this.id + 'heading';
    this.collapse = this.id + 'collapse';
  }

}
