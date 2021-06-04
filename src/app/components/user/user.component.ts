import { JsonPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User/User';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    users:User[] =[
    {id:11,name:'moin'},
     { id: 12, name: 'Narco' },
     { id: 13, name: 'Bombasto' },
     { id: 14, name: 'Celeritas' },
     { id: 15, name: 'Magneta' },
     { id: 16, name: 'RubberMan' },
     { id: 17, name: 'Dynama' },
     { id: 18, name: 'Dr IQ' },
     { id: 19, name: 'Magma' },
     { id: 20, name: 'Tornado' }
]

  selectedUser?:User;
  onSelect(user:User){
    this.selectedUser = user;
  }
  constructor(public route:ActivatedRoute,public userService:UserService) { }


  getUsersFromUserService:User[]=[];
  ngOnInit(): void {
      this.userService.getUsers()
      .subscribe((res)=> this.getUsersFromUserService = (res));
   
  }

}
