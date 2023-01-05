import { Component, OnInit } from '@angular/core';
import { creditCard } from 'src/app/shared/shared-models/creditCard.model';
import { CreditCardService } from 'src/app/shared/shared-services/credit-card.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(
    private CreditCardService : CreditCardService
  ) { }
  creditCards:creditCard[] = []
  ngOnInit(): void {
    this.CreditCardService.getSavedCreditCards().subscribe((res) => {
      console.log(res);
      this.creditCards = res.creditCards;
    });
  }
  delete(index:number){
    console.log(index)
    let activeUserId = JSON.parse(localStorage['user']).uid
      ? JSON.parse(localStorage['user']).uid
      : null;
    this.CreditCardService.removeCreditCard(activeUserId, index)
  }
  onSubmitCreditCard(card:any){
    delete card.value.saveCreditCard;
    this.CreditCardService.addCreditCard(
      JSON.parse(localStorage['user']).uid
        ? JSON.parse(localStorage['user']).uid
        : null,
      card.value as creditCard
    );
  }
}
