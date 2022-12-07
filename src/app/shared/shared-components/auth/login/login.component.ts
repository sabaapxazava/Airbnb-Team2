import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseWorkerService } from 'src/app/shared/shared-services/firebase-worker.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private fireWorker: FirebaseWorkerService) {}

  ngOnInit(): void {}
  LoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    let formValue: any = this.LoginForm.value;
    this.fireWorker.SignIn(formValue.email, formValue.password).then((res) => {
      res.subscribe((user: any) => {
        this.fireWorker.signInEmitter.emit(user);
      });
    });
  }

  signInWithGoogle() {
    this.fireWorker.googleAuth().then((res) => {
      res.subscribe((user: any) => {
        console.log(user);
        this.fireWorker.signInEmitter.emit(user);
      });
    });
  }

  forgotPassword() {
    let userEmail: any = this.LoginForm.value.email;
    this.fireWorker.forgotPassword(userEmail).then(res =>{
      console.log(res);
    });
  }
}
