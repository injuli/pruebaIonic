import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CargarGpxPage } from './cargar-gpx.page';

const routes: Routes = [
  {
    path: '',
    component: CargarGpxPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CargarGpxPage]
})
export class CargarGpxPageModule {}
