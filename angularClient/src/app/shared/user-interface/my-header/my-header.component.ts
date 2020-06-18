/* IMPORTS */
import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { ObservablesService } from "../../../services/observables/observables.service";
import { AuthService } from "../../../services/auth/auth.service";


/* DEFINITION */
@Component({
    selector: 'app-my-header',
    templateUrl: './my-header.component.html',
    styleUrls: ['./my-header.component.scss']
})


/* EXPORT */
export class MyHeaderComponent implements OnInit {

    // PROPERTIES
    @Input() path: string;
    @Input() headerTitle: string;
    public userData: object;


    // DEPENDENCIES INJECTION
    constructor(
        private Router: Router,
        private ObservablesService: ObservablesService,
        private AuthService: AuthService
    ) {
        // get user data observer
        this.ObservablesService
            .getObservableData('user')
            .subscribe(userDataObserver => { this.userData = userDataObserver; });
    }

    // METHODS
    // log out user
    public logout = async () => {
        // log in user in Api
        const userInfo = await this.AuthService.logOutUser();

        console.log(userInfo);
        // if logout is successful, redirect to home
        if (userInfo.data === "User logged out.") {
            this.Router.navigateByUrl('/');
        }
        // Set user info observable value
        this.ObservablesService.setObservableData('user', null);
        this.ObservablesService.setObservableData('shopping-list', null);
        this.ObservablesService.setObservableData('inventory', null);

    };

    public setToggleBurgerNavEventListener = () => {

        const burger = document.querySelector('.navbar-burger');
        const menu = document.querySelector('.navbar-menu');

        burger.addEventListener('click', () => {
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');

        });

    }

    ngOnInit() {
        this.setToggleBurgerNavEventListener();

    }
}
