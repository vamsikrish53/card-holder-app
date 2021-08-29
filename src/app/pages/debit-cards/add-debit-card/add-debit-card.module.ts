import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddDebitCardPageRoutingModule } from './add-debit-card-routing.module';

import { AddDebitCardPage } from './add-debit-card.page';
import { CardNumDirective } from 'src/app/directives/card-num.directive';
import { OnlyNumber } from 'src/app/directives/only-number.directive';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDebitCardPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
    
  ],
  declarations: [AddDebitCardPage, CardNumDirective, OnlyNumber
  ], 
})
export class AddDebitCardPageModule {}
