import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../auth/login/login.component';
import { RegistrationComponent } from '../../auth/registration/registration.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    
  }

  openDialogRegister() {
    this.dialog.open(RegistrationComponent);
  }
  openDialogLogin(){
    this.dialog.open(LoginComponent);
  }
}
