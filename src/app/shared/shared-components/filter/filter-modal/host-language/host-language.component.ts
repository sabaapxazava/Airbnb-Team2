import { Component, OnInit } from '@angular/core';
import { FilterModalDataComunicationService } from 'src/app/shared/shared-services/filter-modal-data-comunication.service';

@Component({
  selector: 'app-host-language',
  templateUrl: './host-language.component.html',
  styleUrls: ['./host-language.component.css'],
})
export class HostLanguageComponent implements OnInit {
  showMore = true;
  hostLanguage: string[] = [
    'english',
    'german',
    'french',
    'japanese',
    'italian',
    'russian',
    'spanish',
    'chinese',
    'arabic',
    'hindi',
    'turkish',
    'korean',
    'polish',
    'danish',
    'greek',
    'ukrainian',
    'swedish',
    'norwegian',
  ];

  constructor(private filterModalInfo: FilterModalDataComunicationService) {}

  ngOnInit(): void {}
  onShowMore() {
    this.showMore = !this.showMore;
  }

  onHostLanguage(e: any) {
    if (e.target.checked) {
      this.filterModalInfo.filterModalInfo.hostLanguage.push(e.target.value);
    } else {
      let index = this.filterModalInfo.filterModalInfo.hostLanguage.indexOf(
        e.target.value
      );
      this.filterModalInfo.filterModalInfo.hostLanguage.splice(index, 1);
    }
  }
}
