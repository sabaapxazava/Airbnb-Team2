import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator } from '@angular/forms';
import { FirebaseWorkerService } from '../../shared-services/firebase-worker.service';

@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.scss']
})
export class PayFormComponent implements OnInit {

  constructor(private firebase: FirebaseWorkerService) {
    this.firebase.getSavedCreditCards("KFgY9WE0YbZFhoGYPJzGBSaopKy2").subscribe(card => this.Cards = card ? card:[])
    console.log(this.Cards)
   }

  ngOnInit(): void {
  }

  creditCard = new FormGroup({
    cardNumber: new FormControl(''),
    expirationDay: new FormControl(''),
    expirationMonth: new FormControl(''),
    cvv: new FormControl(''),
    saveCreditCard: new FormControl(''),
  });
  
  Cards:any[] = [];

  onSubmit(){
    console.log(this.creditCard.value)
  }
}
