
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ObservablesService } from "../observables/observables.service";
import { Subscription } from 'rxjs/internal/Subscription';


/* DEFINITION */
@Injectable()
export class CrudService {

    // Inject module(s) in the service
    constructor(
        private HttpClient: HttpClient,
        private ObservablesService: ObservablesService) { };

    // METHODS
    // ----- REQUEST SETTINGS -----
    // request headers setting
    private setHeaders = () => {
        const myHeader = new HttpHeaders();
        myHeader.append('Content-Type', 'application/json');

        // return header
        return { headers: myHeader };
    };

    // CRUD method: create item
    public createItem(endpoint: String, data: any): Promise<any> {
        return this.HttpClient
            .post(`/api/${endpoint}`, data, this.setHeaders())
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    };

    //CRUD method: read one item
    // public findOneItem(endpoint: String, name: String): Promise<any> {
    //     return this.HttpClient
    //         .get(`/api/${endpoint}/name/${name}`)
    //         .toPromise()
    //         .then(data => this.getData(endpoint, data))
    //         .catch(this.handleError);
    // };

    // CRUD method: get collection
    public readAllItems(endpoint: string): Promise<any> {
        return this.HttpClient
            .get(`/api/${endpoint}`)
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    };


    // CRUD method: get one item by id
    public readOneItem(endpoint: string, id: String): Promise<any> {
        return this.HttpClient
            .get(`/api/${endpoint}/id/${id}`)
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    };

    // CRUD: get collection of shopping list items
    public getItemsOnShoppingList(): Promise<any> {
        return this.HttpClient
            .get("/api/item?toBuy=true")
            .toPromise()
            .then(data => this.getData('shopping-list', data))
            .catch(this.handleError);
    }

    // CRUD: get collection of inventory list items (items that have a qty > 0)
    public getItemsInInventory(): Promise<any> {
        return this.HttpClient
            .get("/api/item?quantity=1")
            .toPromise()
            .then(data => this.getData('inventory', data))
            .catch(this.handleError);
    }

    // CRUD method: edit an item
    // public updateItemByName(endpoint: string, name: string, data: any): Promise<any> {
    //     return this.HttpClient
    //         .patch(`/api/${endpoint}/name/${name}`, data, this.setHeaders())
    //         .toPromise()
    //         .then(data => this.getData(endpoint, data))
    //         .catch(this.handleError);
    // }

    // CRUD: add or remove element from/to shopping list
    public toggleItemInShoppingList(endpoint: string, name: string, data: any): Promise<any> {
        return this.HttpClient
            .patch(`/api/${endpoint}/name/${name}`, data, this.setHeaders())
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    }

    // CRUD method: edit an item
    // public updateItem(endpoint: string, id: string, data: any): Promise<any> {
    //     return this.HttpClient
    //         .patch(`/api/${endpoint}/${id}`, data, this.setHeaders())
    //         .toPromise()
    //         .then(data => this.getData(endpoint, data))
    //         .catch(this.handleError);
    // };

    // CRUD method: delete an item
    public deleteItem(endpoint: string, id: string): Promise<any> {
        return this.HttpClient
            .delete(`/api/${endpoint}/${id}`, this.setHeaders())
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    };

    // CRUD: decrement qty on inventory item
    public adjustItemInventoryQuantity(endpoint: string, id: string, data, incrementQty: any): Promise<any> {
        return this.HttpClient
            .patch(`/api/${endpoint}/${id}?quantity=${incrementQty}`, data, this.setHeaders())
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    };

    // CRUD: make qty 0 on inventory item
    public removeItemFromInventory(endpoint: string, id: string): Promise<any> {
        return this.HttpClient
            .patch(`/api/${endpoint}/${id}`, this.setHeaders())
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    };

    /* METHODS TO GET API RESPONSES */
    // Get the API response
    private getData = (endpoint, apiResponse: any) => {
        // Switch endpoint to set observable value
        switch (endpoint) {
            case 'shopping-list':
                console.log(apiResponse);
                // Set user info obserrbale value
                this.ObservablesService.setObservableData('shopping-list', apiResponse.data);

                // Return data
                return apiResponse.data || {};
                break;

            case 'inventory':
                // Set user info obserrbale value
                this.ObservablesService.setObservableData('inventory', apiResponse.data);

                // Return data
                return apiResponse.data || {};
                break;

            default:
                // Retun data anytime
                return apiResponse || {};
        };
    };

    // Get the API error
    private handleError = (apiError: any) => Promise.reject(apiError.error);

};
