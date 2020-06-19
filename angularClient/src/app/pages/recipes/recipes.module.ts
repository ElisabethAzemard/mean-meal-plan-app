/* IMPORTS */
import { NgModule } from "@angular/core";
import { ComponentRouter } from "./recipes.router";
import { CommonModule } from '@angular/common';

import { UserInterfaceModule } from '../../shared/user-interface/user-interface.module';

import { CrudService } from 'src/app/services/crud/crud.service';
import { AppFormModule } from "../../shared/form-module/form-module";
import { RecipesComponent } from './recipes.component';


// ce fichier permet d’ajouter des composants spécifiques à la page et de rendre disponible le fichier de routing de la page dans le fichier de routing général de l’application

/* DEFINITION */
@NgModule({
    declarations: [ RecipesComponent ],
    imports: [CommonModule, ComponentRouter, UserInterfaceModule, AppFormModule],
    providers: [CrudService]
})


/* EXPORT */
export class RecipesModule { };
