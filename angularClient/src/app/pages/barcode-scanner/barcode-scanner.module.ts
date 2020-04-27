/* IMPORTS */
import { NgModule } from "@angular/core";
import { ComponentRouter } from "./barcode-scanner.router";
import { CommonModule } from '@angular/common';

import { UserInterfaceModule } from '../../shared/user-interface/user-interface.module';
import { AppFormModule } from "../../shared/form-module/form-module";

import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { BarcodeScannerComponent } from "./barcode-scanner.component";


// ce fichier permet d’ajouter des composants spécifiques à la page et de rendre disponible le fichier de routing de la page dans le fichier de routing général de l’application

/* DEFINITION */
@NgModule({
    declarations: [ BarcodeScannerComponent ],
    imports: [
        ComponentRouter,
        UserInterfaceModule,
        AppFormModule,
        CommonModule,
        BarecodeScannerLivestreamModule
    ],
    bootstrap: [ BarcodeScannerComponent ]
})


/* EXPORT */
export class BarcodeScannerModule { };
