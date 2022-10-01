import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = 'https://goodfoodapi2022.azurewebsites.net/api/Account/';
  constructor(private http: HttpClient) {}

  getUserToken(payload: any) {
    return this.http.post(this.baseUrl + 'GetToken', JSON.stringify(payload));
  }
}
