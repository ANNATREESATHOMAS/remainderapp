import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  eventForm = this.fb.group({
    eventName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    eventDate: ['', [Validators.required, Validators.pattern('[0-9-/]*')]]
  })
user:any
date :any
  constructor(private ds:DataService, private router: Router, private fb:FormBuilder) { 
    this.date= new Date()
    if (localStorage.getItem("currentUserName")) {
      this.user = JSON.parse(localStorage.getItem("currentUserName") || "")
    }

  }

  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert("please Login")
      this.router.navigateByUrl("")
    }
  }
  logout(){
    localStorage.removeItem("currentId")
    localStorage.removeItem("currentUserName")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }
event() {
    if (this.eventForm.valid) {
      var eventName = this.eventForm.value.eventName
      var eventDate = this.eventForm.value.eventDate
      this.ds.event(eventName, eventDate).subscribe((result: any) => {
        if (result) {
          alert(result.message)
        }
      },
        (result) => {
          alert(result.error.message)
        }
      )
    }
    else {
      alert("Invalid Form")
    }
  }
 


}

