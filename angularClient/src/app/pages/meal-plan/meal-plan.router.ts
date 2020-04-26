/* IMPORTS */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { MealPlanComponent } from './meal-plan.component';

// ce fichier permet de définir le composant à afficher

/* DEFINITION */
const route: Routes = [
    {
        path: '',
        component: MealPlanComponent
    }
]


/* EXPORT */
export const ComponentRouter: ModuleWithProviders = RouterModule.forChild(route)
