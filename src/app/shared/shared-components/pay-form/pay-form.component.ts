import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { creditCard } from '../../shared-models/creditCard.model';
import { CreditCardService } from '../../shared-services/credit-card.service';
@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.scss'],
})
export class PayFormComponent implements OnInit {
  constructor(private creditCardService: CreditCardService) {
    this.creditCardService
      .getSavedCreditCards()
      .subscribe((data) => (this.Cards = data.creditCards as creditCard[]));
  }

  ngOnInit(): void {}

  @Output() onSubmitEmitter: EventEmitter<any> = new EventEmitter();
  creditCard = new FormGroup({
    cardName: new FormControl(''),
    cardNumber: new FormControl(''),
    expirationDay: new FormControl(''),
    expirationMonth: new FormControl(''),
    cvv: new FormControl(''),
    saveCreditCard: new FormControl(''),
  });

  Cards: any[] = [];

  onSubmit() {
    this.onSubmitEmitter.emit(this.creditCard);
    
  }
  onCardChange(card: any) {
    if (!card.target.value) {
      this.creditCard.reset();
    } else {
      this.creditCard.patchValue(JSON.parse(card.target.value));
    }
  }
}
