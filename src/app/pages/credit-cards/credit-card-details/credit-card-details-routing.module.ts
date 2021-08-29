import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditCardDetailsPage } from './credit-card-details.page';

const routes: Routes = [
  {
    path: '',
    component: CreditCardDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditCardDetailsPageRoutingModule {}
