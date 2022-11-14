import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
  onShowMore() {
    this.showMore = !this.showMore;
  }
}
