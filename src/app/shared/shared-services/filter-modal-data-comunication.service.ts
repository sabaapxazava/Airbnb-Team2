import { EventEmitter, Injectable } from '@angular/core';
import { FilterInfo } from '../shared-models/filterInfo.model';

@Injectable({
  providedIn: 'root',
})
export class FilterModalDataComunicationService {
  advancedFilterEmitter: EventEmitter<any> = new EventEmitter();
  resetValueEmitter: EventEmitter<any> = new EventEmitter();

  paramsUrl!: string;

  public filterModalInfo = new FilterInfo();

  constructor() {}
}
