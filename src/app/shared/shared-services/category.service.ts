import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventEmitter } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categoryItemEmitter: EventEmitter<any> = new EventEmitter();

  private apiUrl!: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = `${environment.baseApiUrl}`;
  }

  getAllCategories(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/Category`);
  }

  getFilteredCategoris(link: string): Observable<any> {
    return this.httpClient
      .get(`${this.apiUrl}/Hotel/filter-by-category${link}`)
      .pipe(
        tap((res) => {
          this.categoryItemEmitter.emit(res);
        })
      );
  }
}
