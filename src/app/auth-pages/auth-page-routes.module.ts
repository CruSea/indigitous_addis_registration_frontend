import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {WelcomeComponent} from "./welcome.component";
export const AuthPageRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'welcome',
      component: WelcomeComponent,
    }]
  },
  {
    path: '',
    children: [{
      path: 'register',
      component: RegisterComponent,
    }]
  },

];@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AuthPageRoutesModule { }
