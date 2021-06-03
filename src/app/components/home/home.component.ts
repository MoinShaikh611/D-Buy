import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User/User';
import { USERS } from 'src/app/models/User/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users = USERS;
  selectedUser?:User;
  onSelect(user:User):void{
    this.selectedUser = user;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
