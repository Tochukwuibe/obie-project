import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/services/questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq-container',
  templateUrl: './faq-container.component.html',
  styleUrls: ['./faq-container.component.css']
})
export class FaqContainerComponent implements OnInit {


  public faqs = [];
  public opened = false;


  constructor(
    private faqsService: FaqService,
    private nav: Router
  ) { }

  ngOnInit() {
    this.faqs = this.faqsService.getFaqs();
  }

  public onToNew = () => {
    this.nav.navigate(['/faqs/new'])
  }

  public onEdit = (arg) => {

    this.nav.navigate(['/faqs', arg.id])

  }

  public onDelete = (arg) => {
    console.log('dlete press');
    this.opened = !this.opened;
  }

  public onDismiss = (arg) => {
    console.log('the on dismiss arg  ', arg);
  }

}
