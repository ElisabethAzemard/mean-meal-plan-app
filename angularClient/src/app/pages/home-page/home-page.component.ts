/* IMPORTS */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    registered: boolean = true;

    public registrationObject: UserModel = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        repeatpassword: '',
    }

    // Inject AuthService in the class
    constructor(
        private AuthService: AuthService,
        private Router: Router,
    ) { }


    // METHODS
    // ----- USER -----
    // log in
    private loginUser = async (credentials: string) => {
        // log in user in Api
        const userInfo = await this.AuthService.logInUser(credentials);

        // if login is successful, redirect to /news
        if (userInfo) {
            this.Router.navigateByUrl('/shopping-list');
        }
    };

    // display registration form when click on "not registered yet?"
    public displayRegistrationForm = () => {
        this.registered = false;
    }

    // register user
    public registerUser = async (user: UserModel) => {
        // send registration form to auth API
        const userInfo = await this.AuthService.registerUser(user);
        console.log(userInfo);
        //if user registration is successful, redirect to /news
        if (userInfo) {
            this.Router.navigateByUrl('/shopping-list');
        }
    };

    // Only on connected pages (no home)
    private getUserInfo = () => {
        // Use CrudService to get user infos
        this.AuthService.getUserInfo()
            .then(data => {
                console.log('SUCCES request', data);
            })
            .catch(error => {
                console.log('ERROR request', error);
            });
    };

    ngOnInit() {
        // this.getUserInfo();
    }
}
