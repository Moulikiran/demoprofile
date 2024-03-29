import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      companyName: "Thomson Reuters International Services LTD",
      year:"NOV 2021 - Present",
      product:"Checkpoint",
      productDesc:"Checkpoint is research product for tax and accounting professionals. It includes reference sources for U.S. Federal, state, and local taxation; accounting, auditing and corporate finance",
      role: "Full Stack Development Engineer",
      project:"Checkpoint Edge/lassic",
      delivered:"Resposible for handling the feature activties from Front End to Back End. Been part of arcitectural/scale meetings to scale the application.",
      paddingRequired: true
    },
    {
      companyName: "Genesys Telecom Labs Pvt.Ltd -> Infosys Ltd",
      year:"DEC 2017 - OCT 2021",
      product:"PureConnect",
      productDesc:"PureConnect is a Call Center Software that makes customer interactions better. It suppports for mid size market.",
      project:"PureConnect - Analytics",
      role:"Software Engineer",
      delivered:"Deilvered the analytics platform to the customers. This platform allows customers create dashboards based on thier business requirements. Integrated Microstrategy BI tool for data visualization. Created docker containers and kubernetes cluster to make communication to the pureconnect server.",
      paddingRequired: false
    },
    {
      companyName: "OpenText",
      year:"Nov 2014 - Nov 2017",
      product:"System Center Planner",
      productDesc:" System center planner is to aggregate to all opentext products at single place. Customers can download the opentext product/s depending upon their operating system. This system is capable of showing already existing products in the machine so that customers can avoid repetetion of installation.",
      role: "Software Engineer",
      project:" System Center Planner & Product Information Management (PIM)",
      delivered:" Delivered whole platform to the customers so that customers can download the opentext products based on licenses. Created user interface for customers using angularjs. Created REST API's to get the information and metadata of all the products.",
      paddingRequired: true
    }];
  constructor() { }

  ngOnInit() {
  }

}
