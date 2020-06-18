(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shopping-list-shopping-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shopping-list/shopping-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shopping-list/shopping-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section\">\n    <app-add-item (addItem)=\"addItemToList($event)\"></app-add-item>\n</section>\n<section class=\"section\">\n    <ul *ngFor=\"let item of items\" class=\"block-list is-small\">\n        <app-single-item [item]=\"item\" (addItemToInventory)=\"addItemToInventory($event)\"></app-single-item>\n    </ul>\n</section>\n");

/***/ }),

/***/ "./src/app/pages/shopping-list/shopping-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/shopping-list/shopping-list.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/shopping-list/shopping-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/shopping-list/shopping-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");
/* harmony import */ var _services_observables_observables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/observables/observables.service */ "./src/app/services/observables/observables.service.ts");




let ShoppingListComponent = class ShoppingListComponent {
    constructor(CrudService, ObservablesService) {
        this.CrudService = CrudService;
        this.ObservablesService = ObservablesService;
        //METHODS
        // add item to shopping list
        this.addItemToList = (itemAdded) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // if already in shopping list, don't add
            // toggle toBuy status if already in DB
            let response = yield this.CrudService.toggleItemInShoppingList('item', itemAdded.name, { "toBuy": true });
            // update shopping list
            this.getShoppingList();
            // If not, add to DB / local storage / observables => automatically fill model fields with default or ask user ?
        });
        this.addItemToInventory = (addedItemId) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('adding item to inventory');
            // toggle toBuy status & remove 1
            yield this.CrudService.adjustItemInventoryQuantity('item', addedItemId, { "toBuy": false }, true); // true = increment & false = decrement
            // update shopping list
            this.updateInventoryList();
        });
        this.updateInventoryList = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // get items with property toBuy === true
            this.items = yield this.CrudService.getItemsInInventory();
        });
        this.getShoppingList = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.items = yield this.CrudService.getItemsOnShoppingList();
            console.log('heres items', this.items);
        });
        // get shopping list data from observer
        this.ObservablesService
            .getObservableData('shopping-list')
            .subscribe(observerShoppingListData => { this.items = observerShoppingListData; });
    }
    ngOnInit() {
        // get list from API on first load
        this.getShoppingList();
    }
};
ShoppingListComponent.ctorParameters = () => [
    { type: _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] },
    { type: _services_observables_observables_service__WEBPACK_IMPORTED_MODULE_3__["ObservablesService"] }
];
ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shopping-list/shopping-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-list.component.scss */ "./src/app/pages/shopping-list/shopping-list.component.scss")).default]
    })
], ShoppingListComponent);



/***/ }),

/***/ "./src/app/pages/shopping-list/shopping-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/shopping-list/shopping-list.module.ts ***!
  \*************************************************************/
/*! exports provided: ShoppingListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListModule", function() { return ShoppingListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shopping_list_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list.router */ "./src/app/pages/shopping-list/shopping-list.router.ts");
/* harmony import */ var _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/user-interface/user-interface.module */ "./src/app/shared/user-interface/user-interface.module.ts");
/* harmony import */ var _shared_form_module_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/form-module/form-module */ "./src/app/shared/form-module/form-module.ts");
/* harmony import */ var _shopping_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-list.component */ "./src/app/pages/shopping-list/shopping-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_crud_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");

/* IMPORTS */







// ce fichier permet d’ajouter des composants spécifiques à la page et de rendre disponible le fichier de routing de la page dans le fichier de routing général de l’application
/* DEFINITION */
let ShoppingListModule = 
/* EXPORT */
class ShoppingListModule {
};
ShoppingListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_shopping_list_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _shopping_list_router__WEBPACK_IMPORTED_MODULE_2__["ComponentRouter"], _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_3__["UserInterfaceModule"], _shared_form_module_form_module__WEBPACK_IMPORTED_MODULE_4__["AppFormModule"]],
        providers: [src_app_services_crud_crud_service__WEBPACK_IMPORTED_MODULE_7__["CrudService"]],
    })
    /* EXPORT */
], ShoppingListModule);

;


/***/ }),

/***/ "./src/app/pages/shopping-list/shopping-list.router.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/shopping-list/shopping-list.router.ts ***!
  \*************************************************************/
/*! exports provided: ComponentRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRouter", function() { return ComponentRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shopping_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list.component */ "./src/app/pages/shopping-list/shopping-list.component.ts");



// ce fichier permet de définir le composant à afficher
/* DEFINITION */
const route = [
    {
        path: '',
        component: _shopping_list_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingListComponent"]
    }
];
/* EXPORT */
const ComponentRouter = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route);


/***/ })

}]);
//# sourceMappingURL=pages-shopping-list-shopping-list-module.js.map