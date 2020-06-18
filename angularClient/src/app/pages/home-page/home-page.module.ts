/* IMPORTS */
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ComponentRouter } from "./home-page.router";

import { UserInterfaceModule } from '../../shared/user-interface/user-interface.module';

import { AppFormModule } from "../../shared/form-module/form-module";

import { HomePageComponent } from "./home-page.component";

// ce fichier permet d’ajouter des composants spécifiques à la page et de rendre disponible le fichier de routing de la page dans le fichier de routing général de l’application

/* DEFINITION */
@NgModule({
    declarations: [ HomePageComponent ],
    imports: [
        CommonModule,
        ComponentRouter,
        UserInterfaceModule,
        AppFormModule
    ]
})


/* EXPORT */
export class HomePageModule { };
