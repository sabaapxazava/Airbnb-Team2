import { Injectable } from '@angular/core';
import { FilterInfo } from '../shared-models/filterInfo.model';

@Injectable({
  providedIn: 'root',
})
export class FilterModalDataComunicationService {
  public filterModalInfo = new FilterInfo();

  // public minPrice!: number;
  // public maxPrice!: number;
  // public typeOfPlace: string[] = [];
  // public bedrooms!: number;
  // public beds!: number;
  // public bathrooms!: number;

  constructor() {}
}
