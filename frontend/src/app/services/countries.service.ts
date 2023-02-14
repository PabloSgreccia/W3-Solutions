import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  constructor(
    private http: HttpClient,
  ) { }

  getFiveCountries(value: string){
    return this.http.get<any>(`${environment.apiUrl}/countries/?valor=${value}`)
  }

}
