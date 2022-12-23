import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { creditCard } from '../../shared-models/creditCard.model';
import { reservedHotel } from '../../shared-models/reservedHotel.model';
import { FirebaseWorkerService } from '../../shared-services/firebase-worker.service';

@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.scss']
})
export class PayFormComponent implements OnInit {

  constructor(private firebase: FirebaseWorkerService, private activeroute:ActivatedRoute) {
    this.firebase.getSavedCreditCards(JSON.parse(localStorage["user"]).uid ? JSON.parse(localStorage["user"]).uid : null).subscribe(card => this.Cards = card ? card:[])
    console.log(this.Cards)
   }
  ngOnInit(): void {
  }
  @Input() HotelId!:string;
  @Input() startDate!:Date;
  @Input() endDate!:Date;
  @Input() pricePaid!:number;
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
    let reserveDate = new Date()
    console.log(this.creditCard.value)
    if(this.creditCard.value.saveCreditCard){
      delete this.creditCard.value.saveCreditCard
      this.firebase.addCreditCard(JSON.parse(localStorage["user"]).uid ? JSON.parse(localStorage["user"]).uid : null, this.creditCard.value as creditCard)
    }
    let reservedHotel:reservedHotel = {
      hotelId:this.HotelId,
      startDate: this.startDate,
      endDate: this.endDate,
      pricePaid: this.pricePaid,
      reserveDate: reserveDate
    }
    console.log(this.firebase.reserveHotel(JSON.parse(localStorage["user"]).uid ? JSON.parse(localStorage["user"]).uid : null, reservedHotel))
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
