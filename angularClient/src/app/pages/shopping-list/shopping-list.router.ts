/* IMPORTS */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { ShoppingListComponent } from './shopping-list.component';

// ce fichier permet de définir le composant à afficher

/* DEFINITION */
const route: Routes = [
    {
        path: '',
        component: ShoppingListComponent
    }
]


/* EXPORT */
export const ComponentRouter: ModuleWithProviders = RouterModule.forChild(route)
