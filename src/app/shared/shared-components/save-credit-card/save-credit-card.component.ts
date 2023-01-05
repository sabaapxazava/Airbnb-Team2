import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { creditCard } from '../../shared-models/creditCard.model';
import { CreditCardService } from '../../shared-services/credit-card.service';
import { ReservedService } from '../../shared-services/reserved.service';
@Component({
  selector: 'app-save-credit-card',
  templateUrl: './save-credit-card.component.html',
  styleUrls: ['./save-credit-card.component.scss']
})
export class SaveCreditCardComponent implements OnInit {

  constructor(private creditCardService: CreditCardService, private reserve:ReservedService) {
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
  });
  
  Cards:any[] = [];

  onSubmit(){
    this.onSubmitEmitter.emit(this.creditCard)
  }
}
