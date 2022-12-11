import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  private header!: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.header = new HttpHeaders({ 'content-type': 'application/json' });
  }

  setHeaders(key: string, value: string) {
    this.header = this.header.append(key, value);
  }

  getAll<T>(apiUrl: string): Observable<T> {
    return this.httpClient.get(apiUrl) as Observable<T>;
  }

  getById<T>(apiUrl: string): Observable<T> {
    return this.httpClient.get(apiUrl) as Observable<T>;
  }
}
