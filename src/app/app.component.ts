import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Http, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {Router} from "@angular/router";
import { interval } from 'rxjs';
import { timer } from 'rxjs'
import 'rxjs/add/operator/map';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
  data: Greeting;
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  requestOptions = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };
  
  constructor( private http:HttpClient, private router : Router) {
    this.networks = [
      { name: 'Facebook', imgSrc: 'assets/facebook.png', url: 'https://www.facebook.com/mouli545/' },
      { name: 'LinkedIn', imgSrc: 'assets/linkedin.png', url: 'https://www.linkedin.com/in/mouli45/' },
      { name: 'twitter', imgSrc: 'assets/twiiter.png', url: 'https://twitter.com/MouliKiran45' }];

    timer(0, 2000)
    .subscribe(() => {
      // http.get<Greeting>('https://myprofilespring.herokuapp.com/greeting').subscribe(data => {
      //   if(data.content != "null"){
      //     if(data.content === this.oldSelected) {
      //       console.log(data.content , this.oldSelected);
      //     }else{
      //       this.oldSelected = data.content;
      //       this.router.navigate(['/'+data.content]);
      //       console.log("Changing route to"+ data.content);
      //     }
      //   }
      // })
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

interface Greeting{
  content: string;
}