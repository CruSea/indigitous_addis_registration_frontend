import { Injectable } from '@angular/core';
import {Headers} from "@angular/http";
import {Attendant} from "../auth-pages/register/attendant.objects";
import {HttpService} from "./http.service";

@Injectable()
export class RegisterService {

  constructor( private  http: HttpService) { }



  public registerUser(new_attendant: Attendant) {
    const header = new Headers();
    return this.http.sendPostRequest('attendant', new_attendant, header);
  }


}
