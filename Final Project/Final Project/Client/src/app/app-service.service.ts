import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) {}
  getData(){
    return this.http.get('http://localhost:3000/api/get')
  }

}
