import { Http,Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt'; 
import 'rxjs/add/operator/map'; 

@Injectable()
export class AuthService {
  currentUser: any; 

  constructor(private http: Http) {
    let token = localStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }
////http://localhost:39048/api/Token?username="a"&password="b"
  login(credentials) { 
     let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });

     // console.log("credentials: " + JSON.stringify(credentials));
   return this.http.get('http://localhost:35212/api/Token?username=a&password=b', JSON.stringify(credentials))
    .map(response => {
       // console.log("credentials: " + JSON.stringify(credentials));
      let result = response.json();
      //let result ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlwiYVwiIiwicm9sZSI6ImFkbWlucyIsIm5iZiI6MTUwMTg2NTE4OCwiZXhwIjoxNTAxODY2Mzg4LCJpYXQiOjE1MDE4NjUxODh9.6BPtO5rPJ5lxd197v1McwZ_ZoGJkZGboM90Ku1vz7Ck";
      //let result = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImEiLCJhZG1pbiI6InRydWUiLCJuYmYiOjE1MDE4Njc1MDcsImV4cCI6MTUwMTg2ODcwNywiaWF0IjoxNTAxODY3NTA3fQ.KcagBSWRJVqp4zbBHuRTbmrvY1f6oIwqEDYlC1_oi-Q";
    
      //console.log("result.token: " + result);
      //if (result && result.token) {
      if (result) {
        localStorage.setItem('token', result);
        console.log("result: " + result);
        let jwt = new JwtHelper();
        this.currentUser = jwt.decodeToken(localStorage.getItem('token'));

        return true; 
      }
      else return false; 
    });
  }

  logout() { 
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  isLoggedIn() { 
    return tokenNotExpired('token');
  }
}

