import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditCardsListPage } from './credit-cards-list.page';

const routes: Routes = [
  {
    path: '',
    component: CreditCardsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditCardsListPageRoutingModule {}
