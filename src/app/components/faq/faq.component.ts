import { Component, OnInit, Input } from '@angular/core';
import { Faq } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  @Input() faqs: Faq[];
  @Input('onToNew') onToNew: Function;
  @Input('onEdit') onEdit: Function;
  @Input('onDelete') onDelete: Function;
  @Input('opened') opened: boolean;
  @Input('onDismiss') onDismiss: Function;

  constructor() { }

  ngOnInit() {

  }


}
