import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorgeService {
  constructor() { }

  getItem(key: string) {
    let data = [];
    let lsData = localStorage.getItem(key);
    if (lsData) {
      data = JSON.parse(lsData);
    }
    return data;

  }
  setItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

}


