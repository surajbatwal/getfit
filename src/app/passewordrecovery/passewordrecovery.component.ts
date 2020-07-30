import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-passewordrecovery',
  templateUrl: './passewordrecovery.component.html',
  styleUrls: ['./passewordrecovery.component.css']
})
export class PassewordrecoveryComponent implements OnInit {


  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
