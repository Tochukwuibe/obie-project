import { Component, OnInit, OnChanges, Input, Output, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit, OnChanges {

  @Input('opened') opened = false;
  @Input('onDismiss') onDismiss: () => void;
  @ViewChild('content', {static: false}) content: TemplateRef<any>;

  closeResult: string;

  // private content

  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }

  ngOnChanges() {
    
    if (this.opened) {
      
        this.openModal();
    } else {

    }
  }



  private openModal() {
    console.log('onchanges called', this.content);
    if (this.content.elementRef.nativeElement) {
     
      this.modalService.open(this.content.elementRef.nativeElement, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => this.onDismiss, this.onDismiss);

    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



}
