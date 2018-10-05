import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../../services/register.service";
import {Attendant} from "./attendant.objects";
import {Router} from "@angular/router";
declare const swal: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`
    input.ng-invalid.ng-dirty {
      border: 1px solid #ff0f55;
    }
  `]
})
export class RegisterComponent implements OnInit {
  public new_register_attendant = new Attendant();
  constructor(private  registerService: RegisterService, private routeManager: Router) { }

  ngOnInit() {
  }

  public registerUser() {
    this.registerService.registerUser(this.new_register_attendant).subscribe(
      data => {this.showSwalMessage('Welcome', 'Account Registered Successfully!!!'); console.log(data) }
    );
  }


  public showSwalMessage(title: String, message: String) {
    swal({
          title: title,
          text: message,
          type: 'warning',
          confirmButtonClass: 'btn btn-primary'
        },
    ).then((json_data) => {
      this.routeManager.navigate(['/admin/welcome']);
    }, (dismiss) => {
      if (dismiss === 'cancel') { // you might also handle 'close' or 'timer' if you used those
      } else {

        throw dismiss;
      }
    });


  }

}
