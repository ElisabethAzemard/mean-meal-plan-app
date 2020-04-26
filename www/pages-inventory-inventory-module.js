(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inventory-inventory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/inventory.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/inventory.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>inventory works!</p>\n");

/***/ }),

/***/ "./src/app/pages/inventory/inventory.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/inventory/inventory.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/inventory/inventory.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/inventory/inventory.component.ts ***!
  \********************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InventoryComponent = class InventoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inventory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inventory/inventory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inventory.component.scss */ "./src/app/pages/inventory/inventory.component.scss")).default]
    })
], InventoryComponent);



/***/ }),

/***/ "./src/app/pages/inventory/inventory.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/inventory/inventory.module.ts ***!
  \*****************************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _inventory_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory.router */ "./src/app/pages/inventory/inventory.router.ts");
/* harmony import */ var _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/user-interface/user-interface.module */ "./src/app/shared/user-interface/user-interface.module.ts");
/* harmony import */ var _shared_form_module_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/form-module/form-module */ "./src/app/shared/form-module/form-module.ts");
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventory.component */ "./src/app/pages/inventory/inventory.component.ts");

/* IMPORTS */





// ce fichier permet d’ajouter des composants spécifiques à la page et de rendre disponible le fichier de routing de la page dans le fichier de routing général de l’application
/* DEFINITION */
let InventoryModule = 
/* EXPORT */
class InventoryModule {
};
InventoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_inventory_component__WEBPACK_IMPORTED_MODULE_5__["InventoryComponent"]],
        imports: [_inventory_router__WEBPACK_IMPORTED_MODULE_2__["ComponentRouter"], _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_3__["UserInterfaceModule"], _shared_form_module_form_module__WEBPACK_IMPORTED_MODULE_4__["AppFormModule"]]
    })
    /* EXPORT */
], InventoryModule);

;


/***/ }),

/***/ "./src/app/pages/inventory/inventory.router.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/inventory/inventory.router.ts ***!
  \*****************************************************/
/*! exports provided: ComponentRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRouter", function() { return ComponentRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory.component */ "./src/app/pages/inventory/inventory.component.ts");



// ce fichier permet de définir le composant à afficher
/* DEFINITION */
const route = [
    {
        path: '',
        component: _inventory_component__WEBPACK_IMPORTED_MODULE_2__["InventoryComponent"]
    }
];
/* EXPORT */
const ComponentRouter = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route);


/***/ })

}]);
//# sourceMappingURL=pages-inventory-inventory-module.js.map