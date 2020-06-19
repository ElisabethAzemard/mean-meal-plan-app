/* IMPORTS */
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ObservablesService } from "../../../services/observables/observables.service";
import { AuthService } from "../../../services/auth/auth.service";

import { faList, faCalendarWeek, faBarcode, faQuestion, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

/* DEFINITION & EXPORT */
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    faList = faList; // inventaire
    faCalendarWeek = faCalendarWeek; // planning
    faBarcode = faBarcode; // scan
    faQuestion = faQuestion; // recettes
    faShoppingBasket = faShoppingBasket; // courses

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
    ngOnInit() {
    }

}
