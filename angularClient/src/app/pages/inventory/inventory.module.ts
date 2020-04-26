/* IMPORTS */
import { NgModule } from "@angular/core";
import { ComponentRouter } from "./inventory.router";

import { UserInterfaceModule } from '../../shared/user-interface/user-interface.module';

import { AppFormModule } from "../../shared/form-module/form-module";
import { InventoryComponent } from './inventory.component';


// ce fichier permet d’ajouter des composants spécifiques à la page et de rendre disponible le fichier de routing de la page dans le fichier de routing général de l’application

/* DEFINITION */
@NgModule({
    declarations: [ InventoryComponent ],
    imports: [ ComponentRouter, UserInterfaceModule, AppFormModule ]
})


/* EXPORT */
export class InventoryModule { };
