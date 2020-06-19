import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from "../../../models/recipe.model";

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

    // PROPERTIES
    @Input() recipe: RecipeModel;
    @Output() addRecipeToMealPlan = new EventEmitter();
    addToMealPlanButton: boolean = true;


    // DEPENDENCIES INJECTION
    constructor() { }

    private disableButton = () => {
        const btn = document.querySelector('#addToMealPlanButton');
        btn.setAttribute("disabled", "true");
    }

    ngOnInit() {
    }

}
