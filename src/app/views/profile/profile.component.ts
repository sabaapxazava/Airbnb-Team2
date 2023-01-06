import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { creditCard } from 'src/app/shared/shared-models/creditCard.model';
import { CreditCardService } from 'src/app/shared/shared-services/credit-card.service';
import { ProfileService } from 'src/app/shared/shared-services/profile.service';
import { ReservedService } from 'src/app/shared/shared-services/reserved.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private reservedService: ReservedService,
    private profileService: ProfileService,
    private router: Router,
  ) {}

  userInfo = new FormGroup({
    email: new FormControl(''),
    fullName: new FormControl(''),
    phoneNumber: new FormControl(''),
    gender: new FormControl(''),
  });
  creditCards:creditCard[] = [];
  ngOnInit(): void {
    let activeUserId = JSON.parse(localStorage['user']).uid
      ? JSON.parse(localStorage['user']).uid
      : null;

    this.reservedService.getReservedHotel(activeUserId).subscribe((res) => {
      console.log(res);

      this.userInfo = new FormGroup({
        email: new FormControl(res.email),
        fullName: new FormControl(res.fullName),
        phoneNumber: new FormControl(res.phoneNumber),
        gender: new FormControl(res.gender),
      });
    });
  }

  onSubmit() {
    let activeUserId = JSON.parse(localStorage['user']).uid
      ? JSON.parse(localStorage['user']).uid
      : null;

    let formInfo: any = this.userInfo.value;
    this.profileService.updateUser(formInfo, activeUserId);
    this.router.navigate(['/']);
  }
}
