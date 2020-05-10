import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclaracionesPage } from './declaraciones.page';

const routes: Routes = [
  {
    path: '',
    component: DeclaracionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeclaracionesPageRoutingModule {}
