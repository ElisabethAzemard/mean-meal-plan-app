(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-page-home-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap\">\n<section class=\"section\" *ngIf=\"registered\">\n    <app-login-form (formSubmit)=\"loginUser($event)\"\n    (notRegistered)=\"displayRegistrationForm()\"></app-login-form>\n</section>\n\n<section *ngIf=\"!registered\"\n    class=\"section\">\n    <app-registration-form (formSubmit)=\"registerUser($event)\"\n    (alreadyRegistered)=\"displayLoginForm()\"></app-registration-form>\n</section>\n</div>\n");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");

/* IMPORTS */



/* DEFINITION */
let HomePageComponent = 
/* EXPORT */
class HomePageComponent {
    // Inject AuthService in the class
    constructor(AuthService, Router) {
        this.AuthService = AuthService;
        this.Router = Router;
        // Variables
        this.registered = true;
        this.registrationObject = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            repeatpassword: '',
        };
        // METHODS
        // ----- USER -----
        // log in
        this.loginUser = (credentials) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // log in user in Api
            const userInfo = yield this.AuthService.logInUser(credentials);
            // if login is successful, redirect to /news
            if (userInfo) {
                this.Router.navigateByUrl('/shopping-list');
            }
        });
        // display registration form when click on "not registered yet?"
        this.displayRegistrationForm = () => {
            this.registered = false;
        };
        // display login form when click on "already registered?"
        this.displayLoginForm = () => {
            this.registered = true;
        };
        // register user
        this.registerUser = (user) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // send registration form to auth API
            const userInfo = yield this.AuthService.registerUser(user);
            //if user registration is successful, redirect to /news
            if (userInfo) {
                this.Router.navigateByUrl('/shopping-list');
            }
        });
        // Only on connected pages (no home)
        this.getUserInfo = () => {
            // Use CrudService to get user infos
            this.AuthService.getUserInfo()
                .then(data => {
                console.log('SUCCES request', data);
            })
                .catch(error => {
                console.log('ERROR request', error);
            });
        };
    }
    ngOnInit() {
        // this.getUserInfo();
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_page_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page.router */ "./src/app/pages/home-page/home-page.router.ts");
/* harmony import */ var _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/user-interface/user-interface.module */ "./src/app/shared/user-interface/user-interface.module.ts");
/* harmony import */ var _shared_form_module_form_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/form-module/form-module */ "./src/app/shared/form-module/form-module.ts");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-page.component */ "./src/app/pages/home-page/home-page.component.ts");

/* IMPORTS */






// ce fichier permet d’ajouter des composants spécifiques à la page et de rendre disponible le fichier de routing de la page dans le fichier de routing général de l’application
/* DEFINITION */
let HomePageModule = 
/* EXPORT */
class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_page_router__WEBPACK_IMPORTED_MODULE_3__["ComponentRouter"],
            _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_4__["UserInterfaceModule"],
            _shared_form_module_form_module__WEBPACK_IMPORTED_MODULE_5__["AppFormModule"]
        ]
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


/***/ })

}]);
//# sourceMappingURL=pages-home-page-home-page-module.js.map