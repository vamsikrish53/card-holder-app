import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditCardsListPageRoutingModule } from './credit-cards-list-routing.module';

import { CreditCardsListPage } from './credit-cards-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditCardsListPageRoutingModule
  ],
  declarations: [CreditCardsListPage]
})
export class CreditCardsListPageModule {}
