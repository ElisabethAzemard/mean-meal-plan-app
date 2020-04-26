/* IMPORTS */
import { Component, OnInit } from '@angular/core';
import { UserModel } from "../../models/user.model";
import { AuthService } from "../../services/auth/auth.service";


/* DEFINITION */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})


/* EXPORT */
export class HomePageComponent implements OnInit {

  // Variables
  public registrationObject: UserModel = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatePassword: '',
    cgu: false
  }

  // Inject AuthService in the class
  constructor(private authService: AuthService ) { }

  // Create a function to register user
  public registerNewUser = (user: UserModel) => {
    console.log('Validated form HOME', user);

    // Use the service to register user
    this.authService.registerUser(user)
      .then(apiSuccess => console.log(apiSuccess))
      .catch(apiError => console.error(apiError))

  };

  ngOnInit() { }
}
