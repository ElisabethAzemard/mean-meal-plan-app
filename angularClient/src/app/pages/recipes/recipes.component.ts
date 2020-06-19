import { Component, OnInit } from '@angular/core';
import { ObservablesService } from "../../services/observables/observables.service";
import { CrudService } from "../../services/crud/crud.service";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

    recipes: any;

    constructor(
        private ObservablesService: ObservablesService,
        private CrudService: CrudService
    ) {
        // get shopping list data from observer
        this.ObservablesService
            .getObservableData('recipes')
            .subscribe(observerRecipesData => { this.recipes = observerRecipesData; });
    }


    public addRecipeToMealPlan = async (recipeId) => {
        console.log('adding recipe to meal plan');
        await this.CrudService.addRecipeToMealPlan(recipeId);

        // update current state
        this.getRecipesList();
    }

    private getRecipesList = async () => {
        // @TODO : only get recipes that match what's in the inventory
        this.recipes = await this.CrudService.readAllItems('recipe');
    }

    ngOnInit() {
        // get list from API on first load
        this.getRecipesList();
    }

}
