(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/crud/crud.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/crud/crud.service.ts ***!
  \***********************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _observables_observables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observables/observables.service */ "./src/app/services/observables/observables.service.ts");




/* DEFINITION */
let CrudService = class CrudService {
    // Inject module(s) in the service
    constructor(HttpClient, ObservablesService) {
        this.HttpClient = HttpClient;
        this.ObservablesService = ObservablesService;
        // METHODS
        // ----- REQUEST SETTINGS -----
        // request headers setting
        this.setHeaders = () => {
            const myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            myHeader.append('Content-Type', 'application/json');
            // return header
            return { headers: myHeader };
        };
        /* METHODS TO GET API RESPONSES */
        // Get the API response
        this.getData = (endpoint, apiResponse) => {
            // Switch endpoint to set observable value
            switch (endpoint) {
                case 'shopping-list':
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
                case 'recipe':
                    // Set user info obserrbale value
                    this.ObservablesService.setObservableData('recipes', apiResponse.data);
                    // Return data
                    return apiResponse.data || {};
                    break;
                case 'meal-plan':
                    // Set user info obserrbale value
                    this.ObservablesService.setObservableData('meal-plan', apiResponse.data);
                    // Return data
                    return apiResponse.data || {};
                    break;
                default:
                    // Retun data anytime
                    return apiResponse || {};
            }
            ;
        };
        // Get the API error
        this.handleError = (apiError) => Promise.reject(apiError.error);
    }
    ;
    // CRUD method: create item
    createItem(endpoint, data) {
        return this.HttpClient
            .post(`/api/${endpoint}`, data, this.setHeaders())
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    }
    ;
    // CRUD method: get collection
    readAllItems(endpoint) {
        return this.HttpClient
            .get(`/api/${endpoint}`)
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    }
    ;
    // CRUD method: get one item by id
    readOneItem(endpoint, id) {
        return this.HttpClient
            .get(`/api/${endpoint}/id/${id}`)
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    }
    ;
    // CRUD: get collection of shopping list items
    getItemsOnShoppingList() {
        return this.HttpClient
            .get("/api/item?toBuy=true")
            .toPromise()
            .then(data => this.getData('shopping-list', data))
            .catch(this.handleError);
    }
    // CRUD: get collection of shopping list items
    getMealPlanRecipes() {
        return this.HttpClient
            .get("/api/recipe?planned=true")
            .toPromise()
            .then(data => this.getData('meal-plan', data))
            .catch(this.handleError);
    }
    // CRUD: get collection of inventory list items (items that have a qty > 0)
    getItemsInInventory() {
        return this.HttpClient
            .get("/api/item?quantity=1")
            .toPromise()
            .then(data => this.getData('inventory', data))
            .catch(this.handleError);
    }
    // CRUD: add or remove element from/to shopping list
    toggleItemInShoppingList(endpoint, name, data) {
        return this.HttpClient
            .patch(`/api/${endpoint}/name/${name}`, data, this.setHeaders())
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    }
    // CRUD method: delete an item
    deleteItem(endpoint, id) {
        return this.HttpClient
            .delete(`/api/${endpoint}/${id}`, this.setHeaders())
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    }
    ;
    // CRUD: decrement qty on inventory item
    adjustItemInventoryQuantity(endpoint, id, data, incrementQty) {
        return this.HttpClient
            .patch(`/api/${endpoint}/${id}?quantity=${incrementQty}`, data, this.setHeaders())
            .toPromise()
            .then(data => this.getData(endpoint, data))
            .catch(this.handleError);
    }
    ;
    // CRUD: add recipe to meal plan
    addRecipeToMealPlan(id) {
        return this.HttpClient
            .patch(`/api/recipe/${id}`, { planned: true }, this.setHeaders())
            .toPromise()
            .then(data => this.getData('', data))
            .catch(this.handleError);
    }
    ;
    // CRUD: add recipe to meal plan
    removeRecipeFromMealPlan(id) {
        return this.HttpClient
            .patch(`/api/recipe/${id}`, { planned: false }, this.setHeaders())
            .toPromise()
            .then(data => this.getData('', data))
            .catch(this.handleError);
    }
    ;
};
CrudService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _observables_observables_service__WEBPACK_IMPORTED_MODULE_3__["ObservablesService"] }
];
CrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CrudService);

;


/***/ })

}]);
//# sourceMappingURL=common.js.map