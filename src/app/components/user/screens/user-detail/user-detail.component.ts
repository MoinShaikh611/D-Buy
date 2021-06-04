import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {


  @Input()
  selectedUser?:User;
  constructor() { }

  ngOnInit(): void {
  }

}
