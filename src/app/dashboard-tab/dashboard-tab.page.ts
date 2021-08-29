import { Component, OnInit } from '@angular/core';
import { CardData } from '../interfaces/card-data';
import { CardService } from '../services/card.service';

@Component({
  selector: 'dashboard-tab',
  templateUrl: 'dashboard-tab.page.html',
  styleUrls: ['dashboard-tab.page.scss']
})
export class DashboardTabPage implements OnInit {
  cardDetails: CardData;

  constructor(private cardService : CardService) { }

  async ngOnInit() {
    this.cardDetails = await this.cardService.getAllCards();
  }

}
