import {AfterContentChecked,AfterViewChecked,Component,OnChanges,OnInit,Output,SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/shared/shared-models/hotel.model';
import { BaseHttpService } from 'src/app/shared/shared-services/base-http.service';
import { environment } from 'src/environments/environment';@Component({
  selector: 'app-inner-hotel-pg',
  templateUrl: './inner-hotel-pg.component.html',
  styleUrls: ['./inner-hotel-pg.component.scss'],
})
export class InnerHotelPgComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private baseHttpService: BaseHttpService) {
    this.activatedRoute.params.subscribe(params => {
      this.hotelId = params["id"]
      const fullApiUrl = `${environment.baseApiUrl}/Hotel/${this.hotelId}`;
      this.baseHttpService.getById<Hotel>(fullApiUrl).subscribe((res: any) => {
        this.currentHotel = res
      });
    });
  }
  
  public hotelId!:string;
  public currentHotel!:Hotel;
  ngOnInit(): void {
  }
}
