import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlertListService {

  constructor(private http: HttpClient) { }

  public getActionList() {
    return this.http.get(`${environment.api}/action-items`);
  }
}
