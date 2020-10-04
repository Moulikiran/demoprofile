import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRouterRoutingModule } from './admin-router/admin-router-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponentComponent } from './admin-login-component/admin-login-component.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRouterRoutingModule,
    ReactiveFormsModule,
  ],

  declarations: [AdminLoginComponentComponent],

  providers: []
})
export class AdminAreaModule { }
