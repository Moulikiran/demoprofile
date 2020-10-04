import { DataService } from './../../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-admin-login-component',
  templateUrl: './admin-login-component.component.html',
  styleUrls: ['./admin-login-component.component.css']
})
export class AdminLoginComponentComponent implements OnInit {

  username;
  password: string;
  loginForm;
  client: any;
  // Define a users property to hold our user data
  users: Array<any>;

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {
    // Access the Data Service's getUsers() method we defined
    this._dataService.getUsers()
        .subscribe(res => this.users = res);
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.pattern('[\\w\\-\\s\\/]+'),
        Validators.required
      ])),
      password: new FormControl(''),
    });
}
  loginAdmin(formData) {
    console.log(formData.username + 'Helllo' + formData.password);
  }
}
