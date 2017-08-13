import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-registration-thanks',
  templateUrl: './registration-thanks.component.html',
  styleUrls: ['./registration-thanks.component.css']
})
export class RegistrationThanksComponent implements OnInit {
  private router: Router;

  constructor() { }

  ngOnInit() {
  }
//RegistrationOTP

  register() {
          this.router.navigate(['/Fileupload']);
  }
}
