/* IMPORTS */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


/* DEFINITION AND EXPORT */
@Injectable({
    providedIn: 'root'
})
export class ObservablesService {

    constructor() { }

    // Observable subjects
    protected user: BehaviorSubject<any> = new BehaviorSubject<any>(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
    protected shoppingList: BehaviorSubject<any> = new BehaviorSubject<any>(localStorage.getItem('shopping-list') ? JSON.parse(localStorage.getItem('shopping-list')) : null);
    protected inventory: BehaviorSubject<any> = new BehaviorSubject<any>(localStorage.getItem('inventory') ? JSON.parse(localStorage.getItem('inventory')) : null);
    protected recipes: BehaviorSubject<any> = new BehaviorSubject<any>(localStorage.getItem('recipes') ? JSON.parse(localStorage.getItem('recipes')) : null);
    protected mealPlan: BehaviorSubject<any> = new BehaviorSubject<any>(localStorage.getItem('meal-plan') ? JSON.parse(localStorage.getItem('meal-plan')) : null);


    // update any Observable subject value from outside the service
    public setObservableData = (type: string, data: any) => {
        switch (type) {
            case 'user':
                this.user.next(data);
                break;

            case 'shopping-list':
                this.shoppingList.next(data);
                break;

            case 'inventory':
                this.inventory.next(data);
                break;

            case 'recipes':
                this.recipes.next(data);
                break;

            case 'meal-plan':
                this.mealPlan.next(data);
                break;

            default:
                break;
        };

        // set local storage
        // on log out, remove item instead of setting to null
        if (data === null) {
            localStorage.removeItem(type);
        } else {
            localStorage.setItem(type, JSON.stringify(data));
        }
    };

    // get any Observable subject value from outside the service
    public getObservableData = (type: string) => {
        switch (type) {
            case 'user':
                return this.user;
                break;
            case 'shopping-list':
                return this.shoppingList;
                break;
            case 'inventory':
                return this.inventory;
                break;

            case 'recipes':
                return this.recipes;
                break;

            case 'meal-plan':
                return this.mealPlan;
                break;
            default:
                break;
        };
    };
}
