import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  userId: any;
  users: User[] = [];
  user: User = new User();
  userSubscriber: any;
  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      this.getUserById();
    });
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.userSubscriber.unsubscribe();
  }

  getUserById() {
    this.userSubscriber = this.userService.getById(this.userId).subscribe(data => {
      this.user = data;
    })
  }

}
