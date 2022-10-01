import { AuthService } from './../../services/auth-management/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-management',
  templateUrl: './auth-management.component.html',
  styleUrls: ['./auth-management.component.css'],
})
export class AuthManagementComponent implements OnInit {
  loginForm!: FormGroup;
  log_username: any;
  log_password: any;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  // login() {
  //   this.authService.login(this.log_username, this.log_password, 'customer');
  // }
  login() {
    console.log(this.loginForm.value);

    this.authService.login(this.loginForm.value);
  }
}
