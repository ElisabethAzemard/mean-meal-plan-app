/* IMPORTS */
import { NgModule } from "@angular/core";
import { ComponentRouter } from "./shopping-list.router";

import { UserInterfaceModule } from '../../shared/user-interface/user-interface.module';

import { AppFormModule } from "../../shared/form-module/form-module";

import { ShoppingListComponent } from './shopping-list.component';
import { CommonModule } from '@angular/common';
import { CrudService } from 'src/app/services/crud/crud.service';


// ce fichier permet d’ajouter des composants spécifiques à la page et de rendre disponible le fichier de routing de la page dans le fichier de routing général de l’application

/* DEFINITION */
@NgModule({
    declarations: [ ShoppingListComponent ],
    imports: [CommonModule, ComponentRouter, UserInterfaceModule, AppFormModule],
    providers: [CrudService],
})


/* EXPORT */
export class ShoppingListModule { };
