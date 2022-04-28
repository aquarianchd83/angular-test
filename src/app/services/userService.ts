import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { localStorageVariables, Routes } from '../contants';
import { User } from '../model/user';
import { HttpServices } from './httpServices';
import { LocalStorgeService } from './localStorageService';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService: HttpServices , private localStorageService : LocalStorgeService) { }

  

  getAll(): Observable<any> {
    return this.httpService.getAll(Routes.Users);
  }

  getById(id : number): Observable<any> {
    let user:User = new User();
    let users:User[] =  this.localStorageService.getItem(localStorageVariables.Users);
    let tempUser  = users.find(x => x.id == id);
    if(tempUser){
      user = tempUser;
    }
    return new Observable<any>((observer) => {
      observer.next(user);
      observer.complete();
    });
  }
}


