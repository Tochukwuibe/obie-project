import { Component, OnInit, OnChanges, Input, Output, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  @Input('title') title: string;
  @Input('subtitle') subtitle: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {

  }






}
