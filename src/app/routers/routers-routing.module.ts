import { ProjectsComponent } from './../components/projects/projects.component';
import { SkillsComponent } from './../components/skills/skills.component';
import { EducationComponent } from './../components/education/education.component';
import { ActivitiesComponent } from './../components/activities/activities.component';
import { AboutMeComponent } from './../components/about-me/about-me.component';
import { AppComponent } from './../app.component';

import { Routes, RouterModule } from '@angular/router';
import { StudiesComponent } from '../studies/studies.component';
import { AllComponent } from '../all/all.component';
const routes: Routes = [
  {
    path: 'aboutme', component: AboutMeComponent
  },
  {
    path: 'activities', component: ActivitiesComponent
  },
  {
    path : 'education', component : EducationComponent
  },
  {
    path : 'skills', component : SkillsComponent
  },
  {
    path : 'projects', component : ProjectsComponent
  },
  {
    path : '', pathMatch : 'full', redirectTo : 'aboutme'
  }
];

export const RoutersRoutingModule = RouterModule.forRoot(routes);
