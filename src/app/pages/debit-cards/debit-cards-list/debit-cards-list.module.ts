import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebitCardsListPageRoutingModule } from './debit-cards-list-routing.module';

import { DebitCardsListPage } from './debit-cards-list.page';
import { AddDebitCardPage } from '../add-debit-card/add-debit-card.page';
import { AddDebitCardPageModule } from '../add-debit-card/add-debit-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebitCardsListPageRoutingModule,
    AddDebitCardPageModule
  ],
  declarations: [DebitCardsListPage],
  entryComponents: [AddDebitCardPage],
})
export class DebitCardsListPageModule {}
