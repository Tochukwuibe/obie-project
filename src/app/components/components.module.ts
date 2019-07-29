import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { CollapseComponent } from './collapse/collapse.component';
import { CollapseListComponent } from './collapse-list/collapse-list.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    CollapseComponent,
    CollapseListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    CollapseComponent,
    CollapseListComponent
  ]
})
export class ComponentsModule { }
