import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/shared/shared-services/profile.service';
import { ReservedService } from 'src/app/shared/shared-services/reserved.service';

@Component({
  selector: 'app-user-info-update-form',
  templateUrl: './user-info-update-form.component.html',
  styleUrls: ['./user-info-update-form.component.scss'],
})
export class UserInfoUpdateFormComponent implements OnInit {
  constructor(
    private reservedService: ReservedService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  userInfo = new FormGroup({
    email: new FormControl(''),
    fullName: new FormControl(''),
    phoneNumber: new FormControl(''),
    gender: new FormControl(''),
  });

  ngOnInit(): void {
    let activeUserId = JSON.parse(localStorage['user']).uid
      ? JSON.parse(localStorage['user']).uid
      : null;

    this.reservedService.getReservedHotel(activeUserId).subscribe((res) => {
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
