import { Component, OnInit } from '@angular/core';
// import {UserService} from '../user.service';
import { Router } from '@angular/router';
import { Students } from '../Classes/MockStudents';
import { Student } from '../Classes/Student';
import { LoginService } from '../Services/login.service'; 
import { Token } from '@angular/compiler';
import { Tokenko } from '../Classes/Token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = Students;
  userName;
  uzerName;
  token:Tokenko;

  constructor(private router:Router, private LoginService:LoginService) { }

  ngOnInit() {
  }

  onLogIn(e) {
    e.preventDefault();
    console.log(e);

    var userName = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    // var enc = window.btoa(userName+":"+password)

    // console.log(enc);

    this.LoginService.login(userName, password).subscribe(res => {this.token = res
      localStorage.setItem("token", this.token.tokenString);
      this.router.navigate(['dashboard'], { queryParams: { user: userName  } }); 
      console.log(res);
    });
    
    

    // this.uzerName = this.user.filter(Student => Student.userName == username && Student.password == password);
    // console.log(this.uzerName);

      
      // ?username='+username
      // this.userName = username;
      // console.log(this.userName);

  }

}
