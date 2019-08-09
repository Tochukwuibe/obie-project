import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-delete-actions',
  templateUrl: './edit-delete-actions.component.html',
  styleUrls: ['./edit-delete-actions.component.css']
})
export class EditDeleteActionsComponent implements OnInit {

  @Input('onDelete') onDelete: Function;
  @Input('onEdit') onEdit: Function;

  constructor() { }

  ngOnInit() {
  }

}
