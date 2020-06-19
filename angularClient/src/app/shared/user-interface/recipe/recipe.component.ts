import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

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

  faTimes = faTimes;
  faPlus = faPlus;

  // DEPENDENCIES INJECTION
  constructor() { }

  private disableButton = () => {
    const btn = document.querySelector('#addToMealPlanButton');
    btn.setAttribute("disabled", "true");
  }

  ngOnInit() {
  }

}
