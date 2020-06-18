import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../services/crud/crud.service";
import { ObservablesService } from "../../services/observables/observables.service";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
    items: object;

    constructor(
        private CrudService: CrudService,
        private ObservablesService: ObservablesService
    ) {
        // get shopping list data from observer
        this.ObservablesService
            .getObservableData('shopping-list')
            .subscribe(observerShoppingListData => { this.items = observerShoppingListData; });
    }

    //METHODS
    // add item to shopping list
    public addItemToList = async (itemAdded) => {
        // if already in shopping list, don't add
        // toggle toBuy status if already in DB
        let response = await this.CrudService.toggleItemInShoppingList('item', itemAdded.name, { "toBuy": true });
        // update shopping list
        this.getShoppingList();

        // If not, add to DB / local storage / observables => automatically fill model fields with default or ask user ?
    }

    public addItemToInventory = async (addedItemId) => {
        console.log('adding item to inventory');
        console.log(addedItemId);
        // toggle toBuy status & remove 1
        await this.CrudService.adjustItemInventoryQuantity('item', addedItemId, { "toBuy": false }, true); // true = increment & false = decrement

        // update shopping list
        // this.updateInventoryList();
        this.getShoppingList();
    }

    // public updateInventoryList = async () => {
    //     // get items with property toBuy === true
    //     this.items = await this.CrudService.getItemsInInventory();
    // }

    public getShoppingList = async () => {
        this.items = await this.CrudService.getItemsOnShoppingList();
        console.log('heres items', this.items);
    }

    ngOnInit() {
        // get list from API on first load
        this.getShoppingList();
    }

}
