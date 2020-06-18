import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../services/crud/crud.service";
import { ObservablesService } from "../../services/observables/observables.service";

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

    // PROPERTIES
    items: any;

    constructor(
        private CrudService: CrudService,
        private ObservablesService: ObservablesService
    ) {
        // get shopping list data from observer
        this.ObservablesService
            .getObservableData('inventory')
            .subscribe(observerInventoryData => { this.items = observerInventoryData; });
    }

    public removeItemFromInventory = async (removedItemId) => {
        console.log('removing from invent.');
        await this.CrudService.removeItemFromInventory('item', removedItemId); // true = increment & false = decrement
    }

    public decrementQty = async (removedItem) => {
        console.log('decrementing');
        // get item object. If it is essential, add to shopping list on last element removed from inventory
        if (removedItem.essential === true && removedItem.quantity === 1) {
            await this.CrudService.adjustItemInventoryQuantity('item', removedItem._id, { "toBuy": true }, false); // true = increment & false = decrement

        } else {
            await this.CrudService.adjustItemInventoryQuantity('item', removedItem._id, { "toBuy": false }, false); // true = increment & false = decrement
        }
    }

    public incrementQty = async (addedItemId) => {
        console.log('incrementing');
        await this.CrudService.adjustItemInventoryQuantity('item', addedItemId, null, true); // true = increment & false = decrement
    }

    private getInventoryList = async () => {
        this.items = await this.CrudService.getItemsInInventory();
    }


    ngOnInit() {
        // get list from API on first load
        this.getInventoryList();
    }

}
