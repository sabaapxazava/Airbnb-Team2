import { Component, OnInit } from '@angular/core';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';

@Component({
  selector: 'app-host-language',
  templateUrl: './host-language.component.html',
  styleUrls: ['./host-language.component.css'],
})
export class HostLanguageComponent implements OnInit {
  showMore = true;
  HostLanguage: string[] = [
    'English',
    'German',
    'French',
    'Japanese',
    'Italyan',
    'Georgian',
  ];

  constructor(private filterModalInfo: FilterModalDataComunicationService) {}

  ngOnInit(): void {}
  onShowMore() {
    this.showMore = !this.showMore;
  }

  onHostLanguage(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.HostLanguage.push(e.target.value);
    } else {
      let index = this.filterModalInfo.filterModalInfo.HostLanguage.indexOf(
        e.target.value
      );
      this.filterModalInfo.filterModalInfo.HostLanguage.splice(index, 1);
    }
  }
}
