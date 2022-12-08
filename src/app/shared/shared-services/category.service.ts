import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl!: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = `${environment.baseCategoryApiUrl}`;
  }

  getAllCategories(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
}
