import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotelModelModule } from 'src/app/shared/shared-models/hotel-model.model';
import { Hotel } from '../../shared-models/hotel.model';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Input()
  currentHotel!:Hotel;
  @Output() numberOfDaysEmitter : EventEmitter<any> = new EventEmitter();
  @Output() StartDateEndDate : EventEmitter<any> = new EventEmitter();
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  cost: any = 0;
  numberOfDays: any = 0;
  startDate!: any;
  endDate!: any;

  constructor() { }

  ngOnInit(): void {
  }
  dayDifference(date1:any, date2:any) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffDays;
  }

  ngAfterViewChecked(): void {
    if (
      this.range.controls.start.value != null &&
      this.range.controls.end.value != null
    ) {
      this.startDate = this.range.value.start;
      this.endDate = this.range.value.end;
     
      this.numberOfDays = this.dayDifference(this.startDate, this.endDate);
      this.cost = this.numberOfDays * this.currentHotel.rooms[0].price;

      this.numberOfDaysEmitter.emit(this.numberOfDays)
      this.StartDateEndDate.emit({startDate: this.startDate, endDate: this.endDate})
      this.endDate = null;
      this.startDate = null;

    }
  }
}
