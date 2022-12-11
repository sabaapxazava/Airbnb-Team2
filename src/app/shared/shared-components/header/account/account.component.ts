import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FirebaseWorkerService} from 'src/app/shared/shared-services/firebase-worker.service';
import {LoginComponent} from '../../auth/login/login.component';
import {RegistrationComponent} from '../../auth/registration/registration.component';
import {EventManagerService} from "../../../shared-services/event-manager.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  user: any = null;

  constructor(
    public dialog: MatDialog,
    private firebaseWorker: FirebaseWorkerService,

    private eventManagerService: EventManagerService
  ) {

    this.eventManagerService.loginEventHTMLHandler.subscribe({
      next: (msg: any) => {
        this.showProfile(msg)
      }
    })

    this.eventManagerService.logoutEventHTMLHandler.subscribe({
      next: () => {
        this.clearProfile()
      }
    })

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
