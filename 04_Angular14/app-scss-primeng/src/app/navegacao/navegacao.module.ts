import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppMenuComponent } from './app-menu/app-menu.component';



@NgModule({
  declarations: [
    AppFooterComponent,
    AppMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppFooterComponent,
    AppMenuComponent
  ]
})
export class NavegacaoModule { }
