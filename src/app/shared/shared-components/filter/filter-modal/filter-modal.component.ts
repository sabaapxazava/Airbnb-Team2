import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css'],
})
export class FilterModalComponent implements OnInit {
  showModal: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  onShowModal() {
    this.showModal = !this.showModal;
  }
  onCloseModal(item: any) {
    this.showModal = item;
  }
}
