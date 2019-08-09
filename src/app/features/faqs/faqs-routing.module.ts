import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqContainerComponent } from './faq-container/faq-container.component';
import { CreateEditContainerComponent } from './create-edit-container/create-edit-container.component';


const routes: Routes = [
  { path: '', component: FaqContainerComponent },
  { path: 'new', component: CreateEditContainerComponent },
  { path: ':id', component: CreateEditContainerComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqsRoutingModule { }
