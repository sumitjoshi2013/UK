import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-residentialinformation',
  templateUrl: './residentialinformation.component.html'
})
export class ResidentialinformationComponent implements OnInit {
  private router: Router;
  constructor() { }

  ngOnInit() {
  }


  register() {
          this.router.navigate(['/RegistrationOTP']);
  }
}
