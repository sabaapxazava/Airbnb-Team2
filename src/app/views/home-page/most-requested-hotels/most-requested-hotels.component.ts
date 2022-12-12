import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { BaseHttpService } from 'src/app/core/http/base-http.service';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-most-requested-hotels',
  templateUrl: './most-requested-hotels.component.html',
  styleUrls: ['./most-requested-hotels.component.scss'],
})
export class MostRequestedHotelsComponent implements OnInit {
  cards: any[] = [];
  constructor(private baseHttpService: BaseHttpService) {}

  ngOnInit(): void {
    const fullApiUrl = `${environment.baseApiUrl}/Hotel`;
    this.baseHttpService.getAll<Hotel>(fullApiUrl).subscribe((res: any) => {
      this.cards = res;
      console.log(this.cards);
      
    });
  }
}
