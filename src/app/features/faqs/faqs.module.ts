import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqContainerComponent } from './faq-container/faq-container.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { CreateEditContainerComponent } from './create-edit-container/create-edit-container.component';



@NgModule({
  declarations: [
    FaqContainerComponent, 
    CreateEditContainerComponent,
  ],
  imports: [
    CommonModule,
    FaqsRoutingModule,
    ComponentsModule
  ]
})
export class FaqsModule { }
