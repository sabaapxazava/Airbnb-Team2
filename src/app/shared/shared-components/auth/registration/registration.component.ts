import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/shared-models/user.model';
import { FirebaseWorkerService } from 'src/app/shared/shared-services/firebase-worker.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private fireWorker: FirebaseWorkerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  RegistrationForm = new FormGroup({
    firstName: new FormControl(''),
    email: new FormControl(''),
    lastName: new FormControl(''),
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

  // signUp() {
  //   let tmpUser: User = new User();
  //   tmpUser.email = 'givi@gmail.com';
  //   tmpUser.gender = 'onisesoselia@gmail.com';
  //   tmpUser.lastName = 'onisesoselia@gmail.com';
  //   tmpUser.phoneNumber = 'onisesoselia@gmail.com';
  //   tmpUser.firstName = 'onisesoselia@gmail.com';
  //   this.fireWorker.signUp(tmpUser, '123123');
  // }

  // signIn() {
  //   this.fireWorker.SignIn('givi@gmail.com', '123123');
  // }
}
