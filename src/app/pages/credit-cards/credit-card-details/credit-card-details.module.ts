import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditCardDetailsPageRoutingModule } from './credit-card-details-routing.module';

import { CreditCardDetailsPage } from './credit-card-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditCardDetailsPageRoutingModule
  ],
  declarations: [CreditCardDetailsPage]
})
export class CreditCardDetailsPageModule {}
