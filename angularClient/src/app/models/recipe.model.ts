export interface RecipeModel {
    name: string,
    ingredients: [string],
    steps: [string],
    notes: [],
    timing: Number, // preparation timing in minutes
    tags: [string],
    new: boolean, // already tested?
    starchy: boolean, // suitable for dinner?
    planned: boolean, // has the recipe been picked for the week's meal plan?
    author: [],
}
