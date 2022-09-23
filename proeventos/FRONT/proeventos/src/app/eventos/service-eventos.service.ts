import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceEventos {
  constructor(private http: HttpClient) {}
  eventos: any;

  getEventos(): Observable<any> {
    return this.http.get(`https://localhost:5001/api/evento`);
  }
}
