import { Component, OnInit, Input } from '@angular/core';
import { Faq } from 'src/app/services/questions.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  @Input() faqs: Faq[];

  constructor() { }

  ngOnInit() {
    
  }

}
