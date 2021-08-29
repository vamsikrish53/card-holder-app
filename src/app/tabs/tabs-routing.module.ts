import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { DebitCardListResolverService } from '../pages/debit-cards/debit-cards-list/debit-card-list-resolver.service';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../dashboard-tab/dashboard-tab.module').then(m => m.DashboardTabPageModule)
          },
          {
            path: 'debit-cards-list',
            loadChildren: () => import('../pages/debit-cards/debit-cards-list/debit-cards-list.module').then( m => m.DebitCardsListPageModule),
            resolve: {
              cardData: DebitCardListResolverService
            }

          },
          {
            path: 'debit-card-details/:cardId',
            loadChildren: () => import('../pages/debit-cards/debit-card-details/debit-card-details.module').then( m => m.DebitCardDetailsPageModule)
          },
          {
            path: 'credit-cards-list',
            loadChildren: () => import('../pages/credit-cards/credit-cards-list/credit-cards-list.module').then( m => m.CreditCardsListPageModule)
          },
          {
            path: 'credit-card-details/:cardId',
            loadChildren: () => import('../pages/credit-cards/credit-card-details/credit-card-details.module').then( m => m.CreditCardDetailsPageModule)
          }
        ]
      },
      {
        path: 'about-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../about-tab/about-tab.module').then(m => m.AboutTabPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
