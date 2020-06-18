/* IMPORT */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './auth.guard';


/* Define APP routes */
const mainRoutes: Routes = [
  {
    path: '',
    loadChildren: './pages/home-page/home-page.module#HomePageModule' // Lazy Load
  },
  {
    path: 'shopping-list',
    loadChildren: './pages/shopping-list/shopping-list.module#ShoppingListModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'barcode-scanner',
    loadChildren: './pages/barcode-scanner/barcode-scanner.module#BarcodeScannerModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'inventory',
    loadChildren: './pages/inventory/inventory.module#InventoryModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'recipes',
    loadChildren: './pages/recipes/recipes.module#RecipesModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'meal-plan',
    loadChildren: './pages/meal-plan/meal-plan.module#MealPlanModule',
    canActivate: [AuthGuard]
  },
];


/* Export */
export const AppRouter: ModuleWithProviders = RouterModule.forRoot(mainRoutes);
