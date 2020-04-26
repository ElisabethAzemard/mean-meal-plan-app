/* IMPORT */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";


/* Define APP routes */
const mainRoutes: Routes = [
  {
    path: '',
    loadChildren: './pages/home-page/home-page.module#HomePageModule' // Lazy Load
  },
  {
    path: 'shopping-list',
    loadChildren: './pages/shopping-list/shopping-list.module#ShoppingListModule'
  },
  {
    path: 'barcode-scanner',
    loadChildren: './pages/barcode-scanner/barcode-scanner.module#BarcodeScannerModule'
  },
  {
    path: 'inventory',
    loadChildren: './pages/inventory/inventory.module#InventoryModule'
  },
  {
    path: 'recipes',
    loadChildren: './pages/recipes/recipes.module#RecipesModule'
  },
  {
    path: 'meal-plan',
    loadChildren: './pages/meal-plan/meal-plan.module#MealPlanModule'
  },
];


/* Export */
export const AppRouter: ModuleWithProviders = RouterModule.forRoot(mainRoutes);
