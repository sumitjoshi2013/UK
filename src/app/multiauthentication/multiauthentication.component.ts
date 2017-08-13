import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'multiauthentication',
  templateUrl: './multiauthentication.component.html',
  styleUrls: ['./multiauthentication.component.css']
})
export class MultiauthenticationComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
    gotoLogin()
    {
      this.router.navigate(['/login']);

    }
}
