import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Constants } from '../common/constants';
import { CardData } from '../interfaces/card-data';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async getCardsInfo() {
    const cardsInfo = await Storage.get({ key: Constants.CARDS_INFO })
    return JSON.parse(cardsInfo.value);
  }

  async setCardsInfo(cardsInfo: CardData) {
    await Storage.set({
      key: Constants.CARDS_INFO,
      value: JSON.stringify(cardsInfo)
    });
  }
}
