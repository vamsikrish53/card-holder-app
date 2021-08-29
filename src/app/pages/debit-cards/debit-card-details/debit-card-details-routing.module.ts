import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebitCardDetailsPage } from './debit-card-details.page';

const routes: Routes = [
  {
    path: '',
    component: DebitCardDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebitCardDetailsPageRoutingModule {}
