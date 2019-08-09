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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NewFaqBtnComponent } from './shared/new-faq-btn/new-faq-btn.component';
import { EditDeleteActionsComponent } from './shared/edit-delete-actions/edit-delete-actions.component';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';
import { InputComponent } from './shared/input/input.component';
import { CreateEditFaqComponent } from './create-edit-faq/create-edit-faq.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { KeywordsComponent } from './shared/keywords/keywords.component';
import { ChipsComponent } from './shared/chips/chips.component';
import { TextEditorComponent } from './shared/text-editor/text-editor.component';
import { CreateEditFaqActionsComponent } from './shared/create-edit-faq-actions/create-edit-faq-actions.component';
import { AvatarComponent } from './shared/avatar/avatar.component';




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
    FaqPreviewItemComponent,
    NewFaqBtnComponent,
    EditDeleteActionsComponent,
    AlertModalComponent,
    InputComponent,
    CreateEditFaqComponent,
    DropdownComponent,
    KeywordsComponent,
    ChipsComponent,
    TextEditorComponent,
    CreateEditFaqActionsComponent,
    AvatarComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    NgbModule,
    // RouterModule
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
    FaqPreviewItemComponent,
    DirectivesModule,
    CreateEditFaqComponent,
    NgbModule
  ]
})
export class ComponentsModule { }
