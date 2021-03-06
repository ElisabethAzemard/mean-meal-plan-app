(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-meal-plan-meal-plan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/meal-plan/meal-plan.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/meal-plan/meal-plan.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section\">\n    <h2 class=\"title is-4 has-text-centered\">Les recettes de la semaine</h2>\n    <ul *ngFor=\"let recipe of recipes\"\n        class=\"block-list is-small\">\n        <app-meal-plan-recipe\n                [recipe]=\"recipe\"\n                (removeRecipeFromMealPlan)=\"removeRecipeFromMealPlan($event)\"></app-meal-plan-recipe>\n    </ul>\n</section>\n");

/***/ }),

/***/ "./src/app/pages/meal-plan/meal-plan.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/meal-plan/meal-plan.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lYWwtcGxhbi9tZWFsLXBsYW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/meal-plan/meal-plan.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/meal-plan/meal-plan.component.ts ***!
  \********************************************************/
/*! exports provided: MealPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealPlanComponent", function() { return MealPlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");
/* harmony import */ var _services_observables_observables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/observables/observables.service */ "./src/app/services/observables/observables.service.ts");

/* IMPORTS */



/* DEFINITION & EXPORT */
let MealPlanComponent = class MealPlanComponent {
    constructor(CrudService, ObservablesService) {
        this.CrudService = CrudService;
        this.ObservablesService = ObservablesService;
        this.removeRecipeFromMealPlan = (recipeId) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.CrudService.removeRecipeFromMealPlan(recipeId);
            yield this.getMealPlanRecipes();
        });
        this.getMealPlanRecipes = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.recipes = yield this.CrudService.getMealPlanRecipes();
        });
        // get shopping list data from observer
        this.ObservablesService
            .getObservableData('meal-plan')
            .subscribe(observerRecipesData => { this.recipes = observerRecipesData; });
    }
    ngOnInit() {
        // get meal plan recipes on first load
        this.getMealPlanRecipes();
    }
};
MealPlanComponent.ctorParameters = () => [
    { type: _services_crud_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] },
    { type: _services_observables_observables_service__WEBPACK_IMPORTED_MODULE_3__["ObservablesService"] }
];
MealPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meal-plan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meal-plan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/meal-plan/meal-plan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meal-plan.component.scss */ "./src/app/pages/meal-plan/meal-plan.component.scss")).default]
    })
], MealPlanComponent);



/***/ }),

/***/ "./src/app/pages/meal-plan/meal-plan.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/meal-plan/meal-plan.module.ts ***!
  \*****************************************************/
/*! exports provided: MealPlanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealPlanModule", function() { return MealPlanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _meal_plan_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meal-plan.router */ "./src/app/pages/meal-plan/meal-plan.router.ts");
/* harmony import */ var _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/user-interface/user-interface.module */ "./src/app/shared/user-interface/user-interface.module.ts");
/* harmony import */ var _shared_form_module_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/form-module/form-module */ "./src/app/shared/form-module/form-module.ts");
/* harmony import */ var _meal_plan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meal-plan.component */ "./src/app/pages/meal-plan/meal-plan.component.ts");
/* harmony import */ var src_app_services_crud_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/crud/crud.service */ "./src/app/services/crud/crud.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");

/* IMPORTS */







// ce fichier permet d’ajouter des composants spécifiques à la page et de rendre disponible le fichier de routing de la page dans le fichier de routing général de l’application
/* DEFINITION */
let MealPlanModule = 
/* EXPORT */
class MealPlanModule {
};
MealPlanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_meal_plan_component__WEBPACK_IMPORTED_MODULE_5__["MealPlanComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _meal_plan_router__WEBPACK_IMPORTED_MODULE_2__["ComponentRouter"], _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_3__["UserInterfaceModule"], _shared_form_module_form_module__WEBPACK_IMPORTED_MODULE_4__["AppFormModule"]],
        providers: [src_app_services_crud_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"]]
    })
    /* EXPORT */
], MealPlanModule);

;


/***/ }),

/***/ "./src/app/pages/meal-plan/meal-plan.router.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/meal-plan/meal-plan.router.ts ***!
  \*****************************************************/
/*! exports provided: ComponentRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRouter", function() { return ComponentRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _meal_plan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meal-plan.component */ "./src/app/pages/meal-plan/meal-plan.component.ts");



// ce fichier permet de définir le composant à afficher
/* DEFINITION */
const route = [
    {
        path: '',
        component: _meal_plan_component__WEBPACK_IMPORTED_MODULE_2__["MealPlanComponent"]
    }
];
/* EXPORT */
const ComponentRouter = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route);


/***/ })

}]);
//# sourceMappingURL=pages-meal-plan-meal-plan-module.js.map