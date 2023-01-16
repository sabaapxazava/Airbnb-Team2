import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { creditCard } from '../../shared-models/creditCard.model';
import { CreditCardService } from '../../shared-services/credit-card.service';
@Component({
  selector: 'app-save-credit-card',
  templateUrl: './save-credit-card.component.html',
  styleUrls: ['./save-credit-card.component.scss']
})
export class SaveCreditCardComponent implements OnInit {

  constructor(private creditCardService: CreditCardService) {
    this.creditCardService.getSavedCreditCards().subscribe(data => this.Cards = data.creditCards as creditCard[])
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
