import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  msg="suraj";

  email = new FormControl('', [Validators.required, Validators.email]);
  fname = new FormControl('', [Validators.required]);
  lname = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required,Validators.minLength(8)]);
  cpassword = new FormControl('', [Validators.required]);



  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  getpassErrorMessage() {
    if (this.password.hasError('required')) 
    {
      return 'You must enter a value';
    }

    return this.password.hasError('minLength(8)') ? '' : 'minimum 8 charactors required';
  }

  ngOnInit(): void {
  }



}
