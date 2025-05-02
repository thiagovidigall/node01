import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { MenubarModule } from 'primeng/menubar';
import { AccordionModule } from 'primeng/accordion';


import { TesteTabviewComponent } from './demos/teste-tabview/teste-tabview.component';
import { ParametrosFormComponent } from './pages/emendas-parlamentares/components/parametros-form/parametros-form.component';
import { VinculacaoFormComponent } from './pages/emendas-parlamentares/components/vinculacao-form/vinculacao-form.component';
import { EmendasFormComponent } from './pages/emendas-parlamentares/components/emendas-form/emendas-form.component';
import { EmendaParlamentarComponent } from './pages/emendas-parlamentares/emenda-parlamentar/emenda-parlamentar.component';


@NgModule({
  declarations: [
    AppComponent,
    TesteTabviewComponent,
    ParametrosFormComponent,
    VinculacaoFormComponent,
    EmendasFormComponent,
    EmendaParlamentarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NavegacaoModule,
    ButtonModule,
    TabViewModule,
    MenubarModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
