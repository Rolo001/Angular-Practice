import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Students } from '../Classes/MockStudents';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  user: string;
  //taking parameters from URL
  constructor(private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.user = params['user'];
      console.log(this.user + " on dashboard component");
    });
   }

   studentList = Students;

  ngOnInit() {
  }

}
