import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FirebaseAuthService} from 'src/app/shared/shared-services/firebase-auth.service';
import {LoginComponent} from '../../auth/login/login.component';
import {RegistrationComponent} from '../../auth/registration/registration.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  user: any = null;

  constructor(
    public dialog: MatDialog,
    private firebaseWorker: FirebaseAuthService,
    private angularFireAuth: AngularFireAuth,
  ) {
    var self = this;
    this.angularFireAuth.onAuthStateChanged(function(user) {
      if (user) {
        self.showProfile(user)
      }
      else{
        self.clearProfile()
      }
    });
  }
  ngOnInit(): void {
    const localUser: string | null = localStorage.getItem('user')

    this.showProfile(localUser)
  }

  showProfile(data:any):void{
    if(data){
      if(typeof data !== 'object'){
        this.user = JSON.parse(data || '');
      }else{
        this.user = data
      }
    }
  }

  clearProfile():void {
    this.user = null
  }

  openDialogRegister() {
    this.dialog.open(RegistrationComponent);
  }
  openDialogLogin() {
    this.dialog.open(LoginComponent);
  }

  singOut() {
    this.firebaseWorker.signOut();
  }

}
