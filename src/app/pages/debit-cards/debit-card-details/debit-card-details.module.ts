import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebitCardDetailsPageRoutingModule } from './debit-card-details-routing.module';

import { DebitCardDetailsPage } from './debit-card-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebitCardDetailsPageRoutingModule
  ],
  declarations: [DebitCardDetailsPage]
})
export class DebitCardDetailsPageModule {}
