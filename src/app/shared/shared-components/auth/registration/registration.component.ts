import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/shared-models/user.model';
import { FirebaseAuthService } from 'src/app/shared/shared-services/firebase-auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private fireWorker: FirebaseAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  RegistrationForm = new FormGroup({
    email: new FormControl(''),
    fullName: new FormControl(''),
    phoneNumber: new FormControl(''),
    gender: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    let formValue: any = this.RegistrationForm.value;
    let regUser = Object.assign(new User(), formValue);
    this.fireWorker.signUp(regUser, formValue.password).then((res) => {
      this.router.navigate(['/']);
    });
  }
}
