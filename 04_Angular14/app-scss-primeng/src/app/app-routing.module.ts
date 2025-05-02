import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { EmendaParlamentarComponent } from './pages/emendas-parlamentares/emenda-parlamentar/emenda-parlamentar.component';

const routes: Routes = [
  { path: '', redirectTo: '/emendas', pathMatch: 'full'},  
  { path: 'emendas', component: EmendaParlamentarComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
