import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  imagesUrl: Array<object> = [{
    image: 'assets/tenth.JPG',
    thumbImage: 'assets/tenth.JPG',
    alt: 'alt of image',
    title: 'Tenth'
  }, {
    image: 'assets/inter.JPG', // Support base64 image
    thumbImage: 'assets/inter.JPG', // Support base64 image
    title: 'Intermediate', //Optional: You can use this key if want to show image with title
    alt: 'Intermediate' //Optional: You can use this key if want to show image with alt
  }, {
    image: 'assets/btech.JPG', // Support base64 image
    thumbImage: 'assets/btech.JPG', // Support base64 image
    title: 'BTech', //Optional: You can use this key if want to show image with title
    alt: 'BTech' //Optional: You can use this key if want to show image with alt
  }, {
    image: 'assets/provisional.JPG', // Support base64 image
    thumbImage: 'assets/provisional.JPG', // Support base64 image
    title: 'BTech', //Optional: You can use this key if want to show image with title
    alt: 'BTech' //Optional: You can use this key if want to show image with alt
  }
];

  constructor() { }

  ngOnInit() {
  }

}
