import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseAuthService } from 'src/app/shared/shared-services/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private fireWorker: FirebaseAuthService) {}

  ngOnInit(): void {}
  LoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    let formValue: any = this.LoginForm.value;
    //TODO need to write validation service

    this.fireWorker.signIn(formValue.email, formValue.password).then((res) => {
      // res.subscribe((user: any) => {
      //   this.fireWorker.signInEmitter.emit(user);
      // });
    });
  }

  signInWithGoogle() {
    this.fireWorker.googleAuth()
  }

  forgotPassword() {
    let userEmail: any = this.LoginForm.value.email;
    this.fireWorker.forgotPassword(userEmail).then(res =>{
      console.log(res);
    });
  }
}
