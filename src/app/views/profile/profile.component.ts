import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from 'src/app/core/http/base-http.service';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  reservedHotelArray: Hotel[] = [];

  constructor(private baseHttpService: BaseHttpService) {}

  ngOnInit(): void {
    let fullApiUrl = `${environment.baseApiUrl}/Hotel/ef4ce06a-bb68-47bb-9c06-1e9b6e39ce8f`;
    this.baseHttpService.getById<Hotel>(fullApiUrl).subscribe((res: Hotel) => {
      this.reservedHotelArray.push(res);
    });
  }
}
