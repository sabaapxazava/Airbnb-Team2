import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator } from '@angular/forms';
import { creditCard } from '../../shared-models/creditCard.model';
import { FirebaseWorkerService } from '../../shared-services/firebase-worker.service';

@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.scss']
})
export class PayFormComponent implements OnInit {

  constructor(private firebase: FirebaseWorkerService) {
    this.firebase.getSavedCreditCards(JSON.parse(localStorage["user"]).uid ? JSON.parse(localStorage["user"]).uid : null).subscribe(card => this.Cards = card ? card:[])
    console.log(this.Cards)
   }

  ngOnInit(): void {
  }

  creditCard = new FormGroup({
    cardName: new FormControl(''),
    cardNumber: new FormControl(''),
    expirationDay: new FormControl(''),
    expirationMonth: new FormControl(''),
    cvv: new FormControl(''),
    saveCreditCard: new FormControl(''),
  });
  
  Cards:any[] = [];

  onSubmit(){
    console.log(this.creditCard.value)
    if(this.creditCard.value.saveCreditCard){
      delete this.creditCard.value.saveCreditCard
      this.firebase.addCreditCard(JSON.parse(localStorage["user"]).uid ? JSON.parse(localStorage["user"]).uid : null, this.creditCard.value as creditCard)
    }
  }
  onCardChange(card:any){
    console.log(card.target.value)
    this.creditCard.patchValue(JSON.parse(card.target.value))
    console.log(this.creditCard.value)
  }
}
