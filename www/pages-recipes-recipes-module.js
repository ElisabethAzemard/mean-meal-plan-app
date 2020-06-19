(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recipes-recipes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipes/recipes.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipes/recipes.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section\">\n    <h2 class=\"title is-4 has-text-centered\">Trouvez de l'inspi(rat)ion !</h2>\n    <ul *ngFor=\"let recipe of recipes\"\n        class=\"block-list is-small\">\n        <app-recipe [recipe]=\"recipe\"\n            (addRecipeToMealPlan)=\"addRecipeToMealPlan($event)\"></app-recipe>\n    </ul>\n</section>\n");

/***/ }),

/***/ "./src/app/pages/recipes/recipes.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/recipes/recipes.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY2lwZXMvcmVjaXBlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/recipes/recipes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/recipes/recipes.component.ts ***!
  \****************************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_observables_observables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/observables/observables.service */ "./src/app/services/observables/observables.service.ts");
/* harmony import */ var _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");




let RecipesComponent = class RecipesComponent {
    constructor(ObservablesService, CrudService) {
        this.ObservablesService = ObservablesService;
        this.CrudService = CrudService;
        this.addRecipeToMealPlan = (recipeId) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('adding recipe to meal plan');
            yield this.CrudService.addRecipeToMealPlan(recipeId);
            // update current state
            this.getRecipesList();
        });
        this.getRecipesList = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // @TODO : only get recipes that match what's in the inventory
            this.recipes = yield this.CrudService.readAllItems('recipe');
        });
        // get shopping list data from observer
        this.ObservablesService
            .getObservableData('recipes')
            .subscribe(observerRecipesData => { this.recipes = observerRecipesData; });
    }
    ngOnInit() {
        // get list from API on first load
        this.getRecipesList();
    }
};
RecipesComponent.ctorParameters = () => [
    { type: _services_observables_observables_service__WEBPACK_IMPORTED_MODULE_2__["ObservablesService"] },
    { type: _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] }
];
RecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipes/recipes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipes.component.scss */ "./src/app/pages/recipes/recipes.component.scss")).default]
    })
], RecipesComponent);



/***/ }),

/***/ "./src/app/pages/recipes/recipes.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/recipes/recipes.module.ts ***!
  \*************************************************/
/*! exports provided: RecipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesModule", function() { return RecipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _recipes_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes.router */ "./src/app/pages/recipes/recipes.router.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/user-interface/user-interface.module */ "./src/app/shared/user-interface/user-interface.module.ts");
/* harmony import */ var src_app_services_crud_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");
/* harmony import */ var _shared_form_module_form_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/form-module/form-module */ "./src/app/shared/form-module/form-module.ts");
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes.component */ "./src/app/pages/recipes/recipes.component.ts");

/* IMPORTS */







// ce fichier permet d’ajouter des composants spécifiques à la page et de rendre disponible le fichier de routing de la page dans le fichier de routing général de l’application
/* DEFINITION */
let RecipesModule = 
/* EXPORT */
class RecipesModule {
};
RecipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_recipes_component__WEBPACK_IMPORTED_MODULE_7__["RecipesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _recipes_router__WEBPACK_IMPORTED_MODULE_2__["ComponentRouter"], _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_4__["UserInterfaceModule"], _shared_form_module_form_module__WEBPACK_IMPORTED_MODULE_6__["AppFormModule"]],
        providers: [src_app_services_crud_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"]]
    })
    /* EXPORT */
], RecipesModule);

;


/***/ }),

/***/ "./src/app/pages/recipes/recipes.router.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/recipes/recipes.router.ts ***!
  \*************************************************/
/*! exports provided: ComponentRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRouter", function() { return ComponentRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes.component */ "./src/app/pages/recipes/recipes.component.ts");



// ce fichier permet de définir le composant à afficher
/* DEFINITION */
const route = [
    {
        path: '',
        component: _recipes_component__WEBPACK_IMPORTED_MODULE_2__["RecipesComponent"]
    }
];
/* EXPORT */
const ComponentRouter = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route);


/***/ })

}]);
//# sourceMappingURL=pages-recipes-recipes-module.js.map