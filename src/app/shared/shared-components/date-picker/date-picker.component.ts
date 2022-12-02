import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotelModelModule } from 'src/app/shared/shared-models/hotel-model.model';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Input()
  currentHotel!:HotelModelModule;
  @Output() numberOfDaysEmitter : EventEmitter<any> = new EventEmitter();

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
  ngAfterViewChecked(): void {
    if (
      this.range.controls.start.value != null &&
      this.range.controls.end.value != null
    ) {
      this.startDate = this.range.controls.start.value.getDate();
      this.endDate = this.range.controls.end.value.getDate();
      this.numberOfDays = this.endDate - this.startDate;
      this.cost = this.numberOfDays * this.currentHotel.price;

      console.log('start date', this.startDate);
      console.log('end date', this.endDate);
      console.log(this.numberOfDays);

      this.endDate = null;
      this.startDate = null;

      this.numberOfDaysEmitter.emit(this.numberOfDays)

    }
  }
}
