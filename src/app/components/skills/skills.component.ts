import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  progress = 10;

  skills = [
    {
      skillName:"DS & Algo",
      progress: "40",
      color: "#ff8763",
      subtitle: (progress: number): string => {
        return `${progress}%`; } },
    {
      skillName:"CoreJava",
      progress: "70",
      color: "#9ad880",
      subtitle: (progress: number): string => {
        return `${progress}%`; }
    },
    {
      skillName:"Spring Boot",
      progress: "50",
      color: "#4882c2",
      subtitle: (progress: number): string => {
        return `${progress}%`; }
    },
    {
      skillName:"Rest Services",
      progress: "70",
      color: "#ff8763",
      subtitle: (progress: number): string => {
        return `${progress}%`; }
    },
    {
      skillName:"Hibernate",
      progress: "50",
      color: "#9ad880",
      subtitle: (progress: number): string => {
        return `${progress}%`; }
    },
    {
      skillName:"Angular Js",
      progress: "70",
      color: "#4882c2",
      subtitle: (progress: number): string => {
        return `${progress}%`; }
    },
    {
      skillName:"Angular 2+",
      progress: "60",
      color: "#ff8763",
      subtitle: (progress: number): string => {
        return `${progress}%`; }
    },
    {
      skillName:"Tomcat",
      progress: "50",
      color: "#9ad880",
      subtitle: (progress: number): string => {
        return `${progress}%`; }
    },
    {
      skillName:"Jenkins",
      progress: "70",
      color: "#4882c2",
      subtitle: (progress: number): string => {
        return `${progress}%`; }
    },
    {
      skillName:"Kubernetes & Docker",
      progress: "40",
      color: "#ff8763",
      subtitle: (progress: number): string => {
        return `${progress}%`; }
    },
    {
      skillName:"Agile Methodlogies",
      progress: "80",
      color: "#9ad880",
      subtitle: (progress: number): string => {
        return `${progress}%`; }
    },
    {
      skillName:"SQL Server",
      progress: "50",
      color: "#4882c2",
      subtitle: (progress: number): string => {
        return `${progress}%`; }
    },
    {
      skillName:"Microstrategy",
      progress: "55",
      color: "#ff8763",
      subtitle: (progress: number): string => {
        return `${progress}%`; }
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
