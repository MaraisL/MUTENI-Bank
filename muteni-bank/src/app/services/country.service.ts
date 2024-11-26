import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>('/assets/countries.json');
  }

  getTaxCountries(): Observable<any[]> {
    return this.http.get<any[]>('/assets/countries-tax.json');
  }
}
