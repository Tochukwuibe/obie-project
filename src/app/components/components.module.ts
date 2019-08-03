import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqComponent } from './faq/faq.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CollapseComponent } from './shared/collapse/collapse.component';
import { CollapseListComponent } from './shared/collapse-list/collapse-list.component';
import { PaginatorComponent } from './shared/paginator/paginator.component';
import { FaqPreviewComponent } from './shared/faq-preview/faq-preview.component';
import { QuestionsListComponent } from './shared/questions-list/questions-list.component';
import { QuestionBlockComponent } from './shared/question-block/question-block.component';
import { FaqPreviewItemComponent } from './shared/faq-preview-item/faq-preview-item.component';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    CollapseComponent,
    CollapseListComponent,
    PaginatorComponent,
    FaqPreviewComponent,
    FaqComponent,
    QuestionsListComponent,
    QuestionBlockComponent,
    FaqPreviewItemComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    CollapseComponent,
    CollapseListComponent,
    PaginatorComponent,
    FaqPreviewComponent,
    FaqComponent,
    QuestionsListComponent,
    QuestionBlockComponent,
    FaqPreviewItemComponent
  ]
})
export class ComponentsModule { }
