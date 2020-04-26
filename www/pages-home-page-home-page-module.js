(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-page-home-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-registration-form\n    [formObject]=\"registerObject\"\n    (sendFormData)=\"registerNewUser($event)\"></app-registration-form>\n<p>home-page works!</p>\n");

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");

/* IMPORTS */


/* DEFINITION */
let HomePageComponent = 
/* EXPORT */
class HomePageComponent {
    // Inject AuthService in the class
    constructor(authService) {
        this.authService = authService;
        // Variables
        this.registrationObject = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeatePassword: '',
            cgu: false
        };
        // Create a function to register user
        this.registerNewUser = (user) => {
            console.log('Validated form HOME', user);
            // Use the service to register user
            this.authService.registerUser(user)
                .then(apiSuccess => console.log(apiSuccess))
                .catch(apiError => console.error(apiError));
        };
    }
    ngOnInit() { }
};
HomePageComponent.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html")).default,
    })
    /* EXPORT */
], HomePageComponent);



/***/ }),

/***/ "./src/app/pages/home-page/home-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/home-page/home-page.module.ts ***!
  \*****************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_page_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page.router */ "./src/app/pages/home-page/home-page.router.ts");
/* harmony import */ var _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/user-interface/user-interface.module */ "./src/app/shared/user-interface/user-interface.module.ts");
/* harmony import */ var _shared_form_module_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/form-module/form-module */ "./src/app/shared/form-module/form-module.ts");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page.component */ "./src/app/pages/home-page/home-page.component.ts");

/* IMPORTS */





// ce fichier permet d’ajouter des composants spécifiques à la page et de rendre disponible le fichier de routing de la page dans le fichier de routing général de l’application
/* DEFINITION */
let HomePageModule = 
/* EXPORT */
class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"]],
        imports: [_home_page_router__WEBPACK_IMPORTED_MODULE_2__["ComponentRouter"], _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_3__["UserInterfaceModule"], _shared_form_module_form_module__WEBPACK_IMPORTED_MODULE_4__["AppFormModule"]]
    })
    /* EXPORT */
], HomePageModule);

;


/***/ }),

/***/ "./src/app/pages/home-page/home-page.router.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/home-page/home-page.router.ts ***!
  \*****************************************************/
/*! exports provided: ComponentRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRouter", function() { return ComponentRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page.component */ "./src/app/pages/home-page/home-page.component.ts");



// ce fichier permet de définir le composant à afficher
/* DEFINITION */
const route = [
    {
        path: '',
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    }
];
/* EXPORT */
const ComponentRouter = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(route);


/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

/* IMPORTS */


/* DEFINITION */
let AuthService = 
/* EXPORT */
class AuthService {
    // Inject HttpCLient into the class
    constructor(http) {
        this.http = http;
        // Define API address
        this.apiUrl = '/api/auth';
    }
    // Function to register user
    registerUser(user) {
        // Delete repeatePassword property from the user object (for checkFields)
        delete user.repeatePassword;
        // Header configuration
        let myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        // Make an HTTP GET call
        return this.http.post(this.apiUrl + '/register', user, { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handelError);
    }
    // Fonction to parse SUCCESS response
    getData(response) {
        // return res || {};
        return Promise.resolve(response || {});
    }
    // Fonction to parse ERROR response
    handelError(response) {
        return Promise.reject(response.error);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    /* EXPORT */
], AuthService);



/***/ })

}]);
//# sourceMappingURL=pages-home-page-home-page-module.js.map