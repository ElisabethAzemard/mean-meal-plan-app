/* IMPORTS */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; // To use global Angular common directives
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MyHeaderComponent } from "./my-header/my-header.component";
import { SingleItemComponent } from './single-item/single-item.component';
import { SingleInventoryItemComponent } from './single-inventory-item/single-inventory-item.component';
import { FooterComponent } from './footer/footer.component';
import { RecipeComponent } from './recipe/recipe.component';
import { MealPlanRecipeComponent } from './meal-plan-recipe/meal-plan-recipe.component';


/* DEFINITION */
@NgModule({
    // Import the components
    declarations: [MyHeaderComponent, SingleItemComponent, SingleInventoryItemComponent, FooterComponent, RecipeComponent, MealPlanRecipeComponent],
    imports: [CommonModule, RouterModule, FontAwesomeModule],

    // Export the components to enable access from main component
    exports: [MyHeaderComponent, SingleItemComponent, SingleInventoryItemComponent, FooterComponent, RecipeComponent, MealPlanRecipeComponent]
})


/* EXPORT */
export class UserInterfaceModule { };
