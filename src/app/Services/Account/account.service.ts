import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiUrl: string = 'https://angularapp2019.azurewebsites.net/api/home';

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(this.apiUrl);
  } 
}