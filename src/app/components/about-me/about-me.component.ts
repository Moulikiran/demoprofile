import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  aboutMeList: any ;
  careerObjective: any ;
  constructor() {
  this.aboutMeList = `Hello! I'm Mouli, a software engineer based in Hyderbad, India.  I always love to innovate and create the things that goes beyond my capabilities.`;
  this.careerObjective = `Hello this is content which about 150 words about yourself Hello this is content which contains about 150
                          words about yourself Hello this is content which contains about 150 words about yourselfHello this is content`;
   }

  ngOnInit() {
    $('#abouts').mouseover(function() {
      $(this).css('background-color', 'yellow');
    });
  }
}
