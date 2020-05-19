import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();
  confirmPassword: string;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }
  registerUser() {
    const regExp = /\S+@\S+\.\S+/;
    this.userService.register(this.user).subscribe(
      data => {
        if ((this.confirmPassword === this.user.password) && (regExp.test(this.user.email))) {
          Swal.fire({
            icon: 'success',
            title: 'success',
            text: 'Registration succeeded!',
          });
          console.log(data);
          this.router.navigateByUrl('/login');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error'
          });
        }
      },
      error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Registration Failed!',
          });
          this.user = new User();
          this.confirmPassword = '';
      }
  );
  }

}
