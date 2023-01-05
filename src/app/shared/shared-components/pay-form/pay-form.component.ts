import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { creditCard } from '../../shared-models/creditCard.model';
import { reservedHotel } from '../../shared-models/reservedHotel.model';
import { CreditCardService } from '../../shared-services/credit-card.service';
import { FirebaseWorkerService } from '../../shared-services/firebase-worker.service';
import { User } from '../../shared-models/user.model'
import { ReservedService } from '../../shared-services/reserved.service';
import { Hotel } from '../../shared-models/hotel.model';
@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.scss']
})
export class PayFormComponent implements OnInit {

  constructor(private creditCardService: CreditCardService, private activeroute:ActivatedRoute, private reserve:ReservedService) {
    this.creditCardService.getSavedCreditCards().subscribe(data => this.Cards = data.creditCards as creditCard[])
    console.log(this.Cards)
   }
  ngOnInit(): void {
  }
  @Output() onSubmitEmitter: EventEmitter<any> = new EventEmitter()
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
    this.onSubmitEmitter.emit(this.creditCard)
  }
  onCardChange(card:any){
    if(!card.target.value){
      this.creditCard.reset();
    }
    else{
      console.log(card.target.value)
      this.creditCard.patchValue(JSON.parse(card.target.value))
      console.log(this.creditCard.value)
    }
  }
}
