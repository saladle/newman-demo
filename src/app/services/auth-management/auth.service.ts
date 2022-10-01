import { UsersService } from './../user-management/users.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export enum Role {
  Admin = 'Admin',
  Customer = 'Customer',
  Salesman = 'Salesman',
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login_success = false;
  role: Role | any;
  currentUser: any;

  userList: any[] = [
    {
      username: 'admin',
      password: '123',
    },
    {
      username: 'customer',
      password: '123',
    },
    {
      username: 'salesman',
      password: '123',
    },
  ];

  constructor(private router: Router, private usersService: UsersService) {}

  // login(log_username: string, log_password: string, role: string) {
  login(payload: any) {
    var res = this.usersService
      .getUserToken(payload)
      .subscribe((val) => console.log(val));
    console.log('huy tesst');
    console.log(res);

    // Object.keys(this.userList).forEach((element) => {
    // this.userList.forEach((element) => {
    //   if (element.username === log_username) {
    //     if (element.password === log_password) {
    //       this.login_success = true;
    //       if (role == 'admin') {
    //         this.role = Role.Admin;
    //       } else if (role == 'salesman') {
    //         this.role = Role.Salesman;
    //       } else {
    //         this.role = Role.Customer;
    //       }
    //       this.currentUser = this.userList[element];
    //       console.log(this.currentUser);
    //     } else {
    //       this.login_success = false;
    //     }
    //     this.router.navigate(['/dashboard']);
    //   }
    // });
  }

  logout() {
    this.router.navigate(['']);
  }

  isAuthenticated() {
    // return true if the user enter correct user name and password
    return this.login_success;
  }
}
