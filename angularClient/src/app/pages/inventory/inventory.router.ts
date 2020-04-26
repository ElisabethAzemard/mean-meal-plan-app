/* IMPORTS */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { InventoryComponent } from './inventory.component';

// ce fichier permet de définir le composant à afficher

/* DEFINITION */
const route: Routes = [
    {
        path: '',
        component: InventoryComponent
    }
]


/* EXPORT */
export const ComponentRouter: ModuleWithProviders = RouterModule.forChild(route)
