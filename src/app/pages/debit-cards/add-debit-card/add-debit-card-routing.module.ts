import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDebitCardPage } from './add-debit-card.page';

const routes: Routes = [
  {
    path: '',
    component: AddDebitCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDebitCardPageRoutingModule {}
