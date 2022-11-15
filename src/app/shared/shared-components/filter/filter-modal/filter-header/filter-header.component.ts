import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-header',
  templateUrl: './filter-header.component.html',
  styleUrls: ['./filter-header.component.css'],
})
export class FilterHeaderComponent implements OnInit {
  @Output() closeModalEmitter = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
  onCloseModal() {
    this.closeModalEmitter.emit(false);
  }
}
