(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-barcode-scanner-barcode-scanner-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/barcode-scanner/barcode-scanner.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/barcode-scanner/barcode-scanner.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>barcode-scanner works!</p>\n");

/***/ }),

/***/ "./src/app/pages/barcode-scanner/barcode-scanner.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/barcode-scanner/barcode-scanner.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhcmNvZGUtc2Nhbm5lci9iYXJjb2RlLXNjYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/barcode-scanner/barcode-scanner.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/barcode-scanner/barcode-scanner.component.ts ***!
  \********************************************************************/
/*! exports provided: BarcodeScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScannerComponent", function() { return BarcodeScannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BarcodeScannerComponent = class BarcodeScannerComponent {
    constructor() { }
    ngOnInit() {
    }
};
BarcodeScannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-barcode-scanner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./barcode-scanner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/barcode-scanner/barcode-scanner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./barcode-scanner.component.scss */ "./src/app/pages/barcode-scanner/barcode-scanner.component.scss")).default]
    })
], BarcodeScannerComponent);



/***/ }),

/***/ "./src/app/pages/barcode-scanner/barcode-scanner.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/barcode-scanner/barcode-scanner.module.ts ***!
  \*****************************************************************/
/*! exports provided: BarcodeScannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScannerModule", function() { return BarcodeScannerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _barcode_scanner_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./barcode-scanner.router */ "./src/app/pages/barcode-scanner/barcode-scanner.router.ts");
/* harmony import */ var _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/user-interface/user-interface.module */ "./src/app/shared/user-interface/user-interface.module.ts");
/* harmony import */ var _shared_form_module_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/form-module/form-module */ "./src/app/shared/form-module/form-module.ts");
/* harmony import */ var _barcode_scanner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./barcode-scanner.component */ "./src/app/pages/barcode-scanner/barcode-scanner.component.ts");

/* IMPORTS */





// ce fichier permet d’ajouter des composants spécifiques à la page et de rendre disponible le fichier de routing de la page dans le fichier de routing général de l’application
/* DEFINITION */
let BarcodeScannerModule = 
/* EXPORT */
class BarcodeScannerModule {
};
BarcodeScannerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_barcode_scanner_component__WEBPACK_IMPORTED_MODULE_5__["BarcodeScannerComponent"]],
        imports: [_barcode_scanner_router__WEBPACK_IMPORTED_MODULE_2__["ComponentRouter"], _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_3__["UserInterfaceModule"], _shared_form_module_form_module__WEBPACK_IMPORTED_MODULE_4__["AppFormModule"]]
    })
    /* EXPORT */
], BarcodeScannerModule);

;


/***/ }),

/***/ "./src/app/pages/barcode-scanner/barcode-scanner.router.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/barcode-scanner/barcode-scanner.router.ts ***!
  \*****************************************************************/
/*! exports provided: ComponentRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRouter", function() { return ComponentRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _barcode_scanner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./barcode-scanner.component */ "./src/app/pages/barcode-scanner/barcode-scanner.component.ts");



// ce fichier permet de définir le composant à afficher
/* DEFINITION */
const route = [
    {
        path: '',
        component: _barcode_scanner_component__WEBPACK_IMPORTED_MODULE_2__["BarcodeScannerComponent"]
    }
];
/* EXPORT */
const ComponentRouter = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route);


/***/ })

}]);
//# sourceMappingURL=pages-barcode-scanner-barcode-scanner-module.js.map