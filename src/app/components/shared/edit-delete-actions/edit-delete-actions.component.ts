import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-edit-delete-actions',
  templateUrl: './edit-delete-actions.component.html',
  styleUrls: ['./edit-delete-actions.component.css']
})
export class EditDeleteActionsComponent implements OnInit {

  @Output('action') action = new EventEmitter<string>()

  constructor(private faq: FaqService) { }

  ngOnInit() {
  }

  public onEdit() {
    this.faq.edit()
  }

  public onDelete() {
    this.faq.delete()
  }

}
