import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

const answerIpsum = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`

export interface Faq {
  question: string,
  answer: string,
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private faqs: Faq[] = [
    { question: 'Some question 1', answer: answerIpsum, id: '1' },
    { question: 'Some question 2', answer: answerIpsum, id: '2' },
    { question: 'Some question 3', answer: answerIpsum, id: '3' },
    { question: 'Some question 4', answer: answerIpsum, id: '4' },
    { question: 'Some question 5', answer: answerIpsum, id: '5' },

  ]

  
  private onEdit$  = new Subject()
  private onDelete$ = new Subject();

  constructor() { }


  public edit() {
    this.onEdit$.next();
  }

  public delete() {
    this.onDelete$.next()
  }

  public listenForEdit(cb) {
    return this.onEdit$.pipe(tap(cb))
  }

  public listenForDelete(cb) {
    return this.onDelete$.pipe(tap(cb))
  }

  public getFaqs() {
    return this.faqs;
  }
}
