/* IMPORTS */
import { NgModule } from "@angular/core";
import { ComponentRouter } from "./meal-plan.router";

import { UserInterfaceModule } from '../../shared/user-interface/user-interface.module';

import { AppFormModule } from "../../shared/form-module/form-module";
import { MealPlanComponent } from './meal-plan.component';


// ce fichier permet d’ajouter des composants spécifiques à la page et de rendre disponible le fichier de routing de la page dans le fichier de routing général de l’application

/* DEFINITION */
@NgModule({
    declarations: [ MealPlanComponent ],
    imports: [ ComponentRouter, UserInterfaceModule, AppFormModule ]
})


/* EXPORT */
export class MealPlanModule { };
