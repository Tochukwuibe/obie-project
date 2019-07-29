import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  {path: '', redirectTo: '/faqs', pathMatch: 'full'},
  {
    path:'faqs',
    loadChildren: () => import('./features/faqs/faqs.module').then(mod => mod.FaqsModule)
  }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
