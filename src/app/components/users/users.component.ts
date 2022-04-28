import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { localStorageVariables } from 'src/app/contants';
import { User } from 'src/app/model/user';
import { LocalStorgeService } from 'src/app/services/localStorageService';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  userSubscriber: any
  constructor(private userService: UserService, private router: Router, private localStorageService: LocalStorgeService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  ngOnDestroy(): void {
    this.userSubscriber.unsubscribe();
  }
  getUsers() {
    this.userSubscriber = this.userService.getAll().subscribe((data: any) => {
      this.users = data;
      this.localStorageService.setItem(localStorageVariables.Users, this.users)
    });
  }

  onEdit(id: number) {
    this.router.navigate(['/user/' + id]);
  }
}
