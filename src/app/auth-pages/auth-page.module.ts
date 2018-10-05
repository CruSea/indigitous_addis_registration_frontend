import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register/register.component";
import {HttpService} from "../services/http.service";
import {RouterModule} from "@angular/router";
import {AuthPageRoutes} from "./auth-page-routes.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RegisterService} from "../services/register.service";
import {ANIMATION_TYPES, LoadingModule} from 'ngx-loading';
import {WelcomeComponent} from "./welcome.component";
@NgModule({  imports: [
    CommonModule,
  RouterModule.forChild(AuthPageRoutes),
  FormsModule,
  HttpClientModule,
  LoadingModule.forRoot({
    animationType: ANIMATION_TYPES.threeBounce,
    backdropBackgroundColour: 'rgba(0,0,0,0.7)',
    backdropBorderRadius: '10px',
    primaryColour: '#ff9436',
    secondaryColour: '#ff761c',
    tertiaryColour: '#ff2c10'
  }),
  ],
  declarations: [WelcomeComponent,RegisterComponent ],
  providers:[ HttpService, RegisterService]
})
export class AuthPageModule { }
