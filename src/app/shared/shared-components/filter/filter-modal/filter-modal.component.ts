import { Component, OnInit, OnChanges } from '@angular/core';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css'],
})
export class FilterModalComponent implements OnInit, OnChanges {
  showModal: boolean = false;
  constructor(private filterModalInfo: FilterModalDataComunicationService) {}

  ngOnChanges(): void {}

  ngOnInit(): void {
    this.filterModalInfo.advancedFilterEmitter.subscribe(() => {
      this.showModal = !this.showModal;
    });
  }
  onShowModal() {
    this.showModal = !this.showModal;
  }
  onCloseModal(item: any) {
    this.showModal = item;
  }
}
