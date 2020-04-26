/* IMPORTS */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomePageComponent } from "./home-page.component";

// ce fichier permet de définir le composant à afficher

/* DEFINITION */
const route: Routes = [
    {
        path: '',
        component: HomePageComponent
    }
]


/* EXPORT */
export const ComponentRouter: ModuleWithProviders = RouterModule.forChild(route)
