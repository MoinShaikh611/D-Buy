import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { User, USERS } from '../models/User/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers():Observable<User[]>{
    const users = of(USERS);
    return users;
  }
}
