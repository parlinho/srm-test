import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class SidebarMenuService {

    constructor(private http: HttpClient) { }

    public getMenuItems() {
        return this.http.get(`${environment.api}/menu-items`);
    }
}