import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: User[] = [] ;
  userSubscription : Subscription | any;
  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.userSub.subscribe(
      (usersRecup: User[])=>{
        this.users = usersRecup;
      }
    )
    this.userService.emitUsers();
  }
  ngOnDestroy(): void {
      this.userSubscription.unsubscribe();
  }

}
