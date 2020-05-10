import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeclaracionesPageRoutingModule } from './declaraciones-routing.module';

import { DeclaracionesPage } from './declaraciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeclaracionesPageRoutingModule
  ],
  declarations: [DeclaracionesPage]
})
export class DeclaracionesPageModule {}
