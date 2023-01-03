import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userInfo = new FormGroup({
    email: new FormControl('soseliaonise@gmail.com'),
    fullName: new FormControl(''),
    phoneNumber: new FormControl(''),
    gender: new FormControl(''),
  });

  onSubmit() {
    console.log(this.userInfo.value);
  }
}
