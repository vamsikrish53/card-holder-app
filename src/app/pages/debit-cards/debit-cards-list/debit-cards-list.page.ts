import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddDebitCardPage } from '../add-debit-card/add-debit-card.page';
import { CardService } from 'src/app/services/card.service';
import { DebitCardDetails } from 'src/app/interfaces/card-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-debit-cards-list',
  templateUrl: './debit-cards-list.page.html',
  styleUrls: ['./debit-cards-list.page.scss'],
})
export class DebitCardsListPage implements OnInit {

  debitCardsList: DebitCardDetails;
  constructor(public modalController: ModalController, private cardService: CardService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      response => {
        this.debitCardsList = response.cardData;
      }
    );
  }
  async openAddCardModal() {
    const modal = await this.modalController.create({
      component: AddDebitCardPage,
      cssClass: "add-debit-card-modal"
    });

    modal.onDidDismiss().then(data => {
       this.getDebtiCardsList().then( res =>
        this.debitCardsList = res);
    });
    return await modal.present();
  }

  getDebtiCardsList() {
    return this.cardService.getDebitCards();
  }
}
