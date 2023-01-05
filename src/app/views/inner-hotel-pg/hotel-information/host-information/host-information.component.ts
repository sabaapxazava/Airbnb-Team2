import { InputModalityDetector } from '@angular/cdk/a11y';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-information',
  templateUrl: './host-information.component.html',
  styleUrls: ['./host-information.component.scss']
})
export class HostInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() hostInformation!: any;
  @Input() hostLanguage!: string;
}
