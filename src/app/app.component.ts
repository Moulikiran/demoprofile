import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Http, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {Router} from "@angular/router";
import {interval} from 'rxjs/observable/interval'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myname: string;
  expertised: string;
  userTemplate: boolean;
  contentAboutMe: string;
  networks: any;
  MobileNumber: string;
  emailId: string;
  pollingData: any;   
  headers: Headers;
  oldSelected : string;
  myQuote : string;
  
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  requestOptions = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };
  
  constructor(http:Http, private router : Router) {
    this.networks = [
      { name: 'Facebook', imgSrc: 'assets/facebook.png', url: 'http://facebook.com' },
      { name: 'LinkedIn', imgSrc: 'assets/linkedin.png', url: 'http://linkedin.com' },
      { name: 'twitter', imgSrc: 'assets/twiiter.png', url: 'http://twitter.com' }];

      this.pollingData = interval(2000)
      .switchMap(() => http.get('http://myprofilespring.herokuapp.com/greeting')).map((data) => data.json())
      .subscribe((data) => {
        if(data != null){
        if(data.content === this.oldSelected) {
          console.log(data.content , this.oldSelected);
        }else{
          this.oldSelected = data.content;
          this.router.navigate(['/'+data.content]);
        }
      }
     });
  }

  ngOnDestroy() {
    this.pollingData.unsubscribe();
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#myname').fadeIn('slow');
    });
    this.myname = 'Mouli Kiran';
    this.myQuote = 'If you think you can </CODE> you are still young;'
    this.expertised = 'Full Stack Engineer';
    this.userTemplate = true;
    this.contentAboutMe = `this is me about this is me about this is me about
                          this is me about this is me about this is me about
                          this is me aboutthis is me about`;
    this.emailId = 'moulikiran.somesetty@gmail.com';
    this.MobileNumber = '+(91)-7799827883';
  }
  public routeToPage(toPage: string){
    this.router.navigate(['/'+toPage]);
  }
}
