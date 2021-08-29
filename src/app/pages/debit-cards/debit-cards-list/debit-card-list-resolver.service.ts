import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CardService } from 'src/app/services/card.service';
import { DebitCardDetails } from 'src/app/interfaces/card-data';

@Injectable({
  providedIn: 'root'
})
export class DebitCardListResolverService implements Resolve<any>{

  constructor(private cardService: CardService) { }

   resolve(route: ActivatedRouteSnapshot): any {
    return this.cardService.getDebitCards();
  }
}
