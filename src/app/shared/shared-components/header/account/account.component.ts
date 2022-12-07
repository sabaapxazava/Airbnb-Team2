import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseWorkerService } from 'src/app/shared/shared-services/firebase-worker.service';
import { LoginComponent } from '../../auth/login/login.component';
import { RegistrationComponent } from '../../auth/registration/registration.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  user: any = null;

  constructor(
    public dialog: MatDialog,
    private firebaseWorker: FirebaseWorkerService
  ) {}
  ngOnInit(): void {
    this.firebaseWorker.signInEmitter.subscribe((res) => {
      this.user = res;
    });
  }

  openDialogRegister() {
    this.dialog.open(RegistrationComponent);
  }
  openDialogLogin() {
    this.dialog.open(LoginComponent);
  }
}
