import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaqService } from 'src/app/services/faq.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/components/shared/alert-modal/alert-modal.component';
import { Subscription, combineLatest } from 'rxjs';


@Component({
  selector: 'app-faq-container',
  templateUrl: './faq-container.component.html',
  styleUrls: ['./faq-container.component.css']
})
export class FaqContainerComponent implements OnInit, OnDestroy {


  public faqs = [];
  public opened = false;
  private sub: Subscription


  constructor(
    private faqsService: FaqService,
    private nav: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.faqs = this.faqsService.getFaqs();

    this.sub = combineLatest(
      this.faqsService.listenForDelete(this.onDelete),
      this.faqsService.listenForEdit(this.onEdit)
    ).subscribe();

  }

  public onToNew = () => {
    this.nav.navigate(['/faqs/new']);
  }

  public onEdit = () => {
    this.nav.navigate(['/faqs', 'edit']);
  }

  public onDelete = () => {
    const ref = this.modalService.open(AlertModalComponent, { centered: true });
    ref.componentInstance.title = "Are you sure ?";
    ref.componentInstance.subtitle = "You are about to delete this faq";
  }

  public onDismiss = (arg) => {
    console.log('the on dismiss arg  ', arg);
  }


  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe()
  }
}
