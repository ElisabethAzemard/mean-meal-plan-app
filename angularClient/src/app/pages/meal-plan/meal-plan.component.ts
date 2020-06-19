/* IMPORTS */
import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../services/crud/crud.service";
import { ObservablesService } from "../../services/observables/observables.service";

/* DEFINITION & EXPORT */
@Component({
    selector: 'app-meal-plan',
    templateUrl: './meal-plan.component.html',
    styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnInit {

    recipes: any;

    constructor(
        private CrudService: CrudService,
        private ObservablesService: ObservablesService
    ) {
        // get shopping list data from observer
        this.ObservablesService
            .getObservableData('meal-plan')
            .subscribe(observerRecipesData => { this.recipes = observerRecipesData; });
     }

    public removeRecipeFromMealPlan = async (recipeId) => {
        await this.CrudService.removeRecipeFromMealPlan(recipeId);
        await this.getMealPlanRecipes();
    }

    public getMealPlanRecipes = async () => {
        this.recipes = await this.CrudService.getMealPlanRecipes();
    }

    ngOnInit() {
        // get meal plan recipes on first load
        this.getMealPlanRecipes();
    }

}
