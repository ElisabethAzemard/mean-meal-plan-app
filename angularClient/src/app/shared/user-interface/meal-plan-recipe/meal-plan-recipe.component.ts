import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from "../../../models/recipe.model";

@Component({
    selector: 'app-meal-plan-recipe',
    templateUrl: './meal-plan-recipe.component.html',
    styleUrls: ['./meal-plan-recipe.component.scss']
})
export class MealPlanRecipeComponent implements OnInit {

    // PROPERTIES
    @Input() recipe: RecipeModel;
    @Output() removeRecipeFromMealPlan = new EventEmitter();

    // DEPENDENCIES INJECTION
    constructor() { }

    ngOnInit() {
    }

}
