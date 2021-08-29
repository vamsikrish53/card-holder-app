import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from "guid-typescript";
import { DebitCard} from 'src/app/interfaces/card-data';
import { CardService } from 'src/app/services/card.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-debit-card',
  templateUrl: './add-debit-card.page.html',
  styleUrls: ['./add-debit-card.page.scss'],
})
export class AddDebitCardPage implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private cardService: CardService, public modalController: ModalController,) { }

  ngOnInit() {
    this.form = this.fb.group({
      num: ['', Validators.required],
      expiry: ['', Validators.required],
      cvv: ['', Validators.required],
      name: ['', Validators.required],
      bankName: ['', Validators.required],
    });
  }

  saveDetails() {
    let debitCard: DebitCard = new DebitCard();
    debitCard.id = Guid.create().toString();
    debitCard.number = this.getInputFieldValue("num");
    debitCard.expiryDate = this.getInputFieldValue("expiry");
    debitCard.cvv = this.getInputFieldValue("cvv");
    debitCard.name = this.getInputFieldValue("name");
    debitCard.bankName = this.getInputFieldValue("bankName");

    this.cardService.addDebitCard(debitCard);

    this.modalController.dismiss();
  }

  getInputFieldValue(fieldName: string) {
    return this.form.get(fieldName).value;
  }

}
