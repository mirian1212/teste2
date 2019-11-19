import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeiroInfoPageRoutingModule } from './primeiro-info-routing.module';

import { PrimeiroInfoPage } from './primeiro-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeiroInfoPageRoutingModule
  ],
  declarations: [PrimeiroInfoPage]
})
export class PrimeiroInfoPageModule {}
