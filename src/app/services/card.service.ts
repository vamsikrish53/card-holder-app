import { Injectable } from '@angular/core';
import { CardData, DebitCard, DebitCardDetails } from '../interfaces/card-data';
import { StorageService } from './storage.service';

@Injectable()
export class CardService {
  cardData: CardData = new CardData();
  constructor(private storageService: StorageService) {
  }

  async getAllCards() {
    this.cardData = await this.storageService.getCardsInfo();
    return (this.cardData) ? this.cardData : null;
  }
  addDebitCard(debitCard: DebitCard) {
    const existingDebitCards = this.cardData && this.cardData.debitCards && this.cardData.debitCards.cards;
    const dCDetails: DebitCardDetails = new DebitCardDetails();
    if (existingDebitCards) {
      existingDebitCards.push(debitCard);
      this.cardData.debitCards.total = this.cardData.debitCards.total + 1;
    }
    else {
      this.cardData = new CardData();
      this.cardData.debitCards.cards.push(debitCard);
      this.cardData.debitCards.total = this.cardData.debitCards.total + 1;
    }
    this.storageService.setCardsInfo(this.cardData);
  }

   async getDebitCards() {
    this.cardData = await this.storageService.getCardsInfo();
    return (this.cardData) ? this.cardData.debitCards : null;
  }
}
