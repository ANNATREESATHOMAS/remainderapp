import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 id=""
 pswd=""
  loginForm = this.fb.group({
    id: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor( private router: Router, private ds: DataService, private fb: FormBuilder) { }


  ngOnInit(): void {
  }
  login() {
    if (this.loginForm.valid) {
      var id = this.loginForm.value.id
      var password = this.loginForm.value.pswd
      this.ds.login(id, password).subscribe((result: any) => {
        if (result) {
          alert(result.message)
          localStorage.setItem("currentId",JSON.stringify(result.currentId))
          localStorage.setItem("currentUserName",JSON.stringify(result.currentUserName))
          localStorage.setItem("token",JSON.stringify(result.token))
          this.router.navigateByUrl("dashboard")
        }
      },
        (result) => {
          alert(result.error.message)
        }
      )
    }
    else {
      alert("invalid form")
    }
  }
}
