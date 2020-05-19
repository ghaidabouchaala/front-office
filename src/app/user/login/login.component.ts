import { Component, OnInit } from '@angular/core';
import {Credentials} from '../../shared/models/credentials';
import {UserService} from '../../shared/services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {StorageService} from '../../shared/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: Credentials = new Credentials();

  constructor(private userService: UserService,
              private route: Router,
              private storageService: StorageService
  ) { }

  ngOnInit() {
  }
  userLogin() {
      this.userService.login(this.credentials).subscribe(
        data => {
          localStorage.setItem('token', JSON.stringify(data.access_token).slice(1, -1));
          this.route.navigateByUrl('products/all');
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed!',
          });
          this.credentials = new Credentials();
        }
      );
  }
}
