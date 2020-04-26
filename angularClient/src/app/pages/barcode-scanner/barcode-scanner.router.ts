/* IMPORTS */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { BarcodeScannerComponent } from './barcode-scanner.component';

// ce fichier permet de définir le composant à afficher

/* DEFINITION */
const route: Routes = [
    {
        path: '',
        component: BarcodeScannerComponent
    }
]


/* EXPORT */
export const ComponentRouter: ModuleWithProviders = RouterModule.forChild(route)
