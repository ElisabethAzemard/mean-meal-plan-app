(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-barcode-scanner-barcode-scanner-module~pages-home-page-home-page-module~pages-inventor~9472ef19"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-module/add-item/add-item.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-module/add-item/add-item.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"title\">Add Item to shopping list</h2>\n<form\n    [formGroup]=\"formData\"\n    (submit)=\"addItem.emit(formData.value); resetForm();\"\n    class=\"form\">\n    <div class=\"field has-addons\">\n        <div class=\"control is-expanded\">\n            <input formControlName=\"name\"\n                type=\"email\"\n                name=\"email\"\n                required\n                minlength=\"5\"\n                placeholder=\"Add an item...\"\n                class=\"input is-primary is-small\">\n        </div>\n        <div class=\"control\">\n            <button type=\"submit\" class=\"button is-primary is-small\">\n                <span class=\"icon is-small\">\n                    <fa-icon [icon]=\"faCheck\"\n                        aria-role=\"button\"></fa-icon>\n                </span>\n            </button>\n        </div>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-module/login-form/login-form.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-module/login-form/login-form.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"title\">Connexion</h2>\n<form [formGroup]=\"formData\"\n    (submit)=\"formSubmit.emit(formData.value)\"\n    class=\"form\">\n    <div class=\"field\">\n        <input formControlName=\"email\"\n            type=\"email\"\n            name=\"email\"\n            required\n            minlength=\"5\"\n            placeholder=\"Your email...\"\n            class=\"input is-primary is-small\">\n    </div>\n    <div class=\"field\">\n        <input formControlName=\"password\"\n            type=\"password\"\n            name=\"password\"\n            required\n            minlength=\"5\"\n            placeholder=\"Your password...\"\n            class=\"input is-primary is-small\">\n    </div>\n    <div class=\"field level\">\n        <div class=\"level-left\">\n            <div class=\"level-item\">\n                <button [disabled]=\"!formData.valid\"\n                    type=\"submit\"\n                    class=\"button is-primary is-small\">OK</button>\n            </div>\n            <div class=\"level-item\">\n                <a href=\"#\"\n                    role=\"button\"\n                    (click)=\"notRegistered.emit()\">Not registered yet?</a>\n            </div>\n        </div>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-module/registration-form/registration-form.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-module/registration-form/registration-form.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"title\">Inscription</h2>\n<!-- Use the NgModel for two-way data binding -->\n<form\n    [formGroup]=\"formData\"\n    (submit)=\"formSubmit.emit(formData.value)\">\n    <div class=\"field\">\n        <label for=\"firstName\">Votre prénom <span *ngIf=\"firstName\">Obligatoire</span></label>\n        <input\n            formControlName=\"firstname\"\n            type=\"text\"\n            name=\"firstname\"\n            class=\"input is-primary is-small\">\n    </div>\n\n    <div class=\"field\">\n        <label for=\"lastName\">Votre nom <span *ngIf=\"lastName\">Obligatoire</span></label>\n        <input\n            formControlName=\"lastname\"\n            type=\"text\"\n            name=\"lastname\"\n            class=\"input is-primary is-small\">\n    </div>\n\n    <div class=\"field\">\n        <label for=\"email\">Votre adresse mail <span *ngIf=\"email\">Obligatoire</span></label>\n        <input\n            formControlName=\"email\"\n            type=\"email\"\n            name=\"email\"\n            class=\"input is-primary is-small\">\n    </div>\n\n    <div class=\"field\">\n        <label for=\"password\">Votre mot de passe <span *ngIf=\"password\">Obligatoire</span></label>\n        <input\n            formControlName=\"password\"\n            type=\"password\"\n            name=\"password\"\n            class=\"input is-primary is-small\">\n    </div>\n\n    <div class=\"field\">\n        <label for=\"repeate-password\">Répéter votre mot de passe<span\n                *ngIf=\"repeatpassword\">Différent</span></label>\n        <input\n            formControlName=\"repeatpassword\"\n            type=\"password\"\n            name=\"repeatpassword\"\n            class=\"input is-primary is-small\">\n    </div>\n\n    <div class=\"field\">\n        <div class=\"level-left\">\n            <div class=\"level-item\">\n                <button [disabled]=\"!formData.valid\"\n                    type=\"submit\"\n                    class=\"button is-primary is-small\">Inscription</button>\n            </div>\n        </div>\n    </div>\n</form>\n");

/***/ }),

/***/ "./src/app/shared/form-module/add-item/add-item.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/form-module/add-item/add-item.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb3JtLW1vZHVsZS9hZGQtaXRlbS9hZGQtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/form-module/add-item/add-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/form-module/add-item/add-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

/* IMPORTS */



/* DEFINITION & EXPORT */
let AddItemComponent = class AddItemComponent {
    // DEPENDENCIES INJECTION
    constructor(FormBuilder) {
        this.FormBuilder = FormBuilder;
        this.addItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCheck"];
        // METHODS
        // reset form
        this.resetForm = () => {
            this.formData = this.FormBuilder.group({
                name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        };
    }
    // LIFECYCLE HOOKS
    ngOnInit() {
        this.resetForm();
    }
};
AddItemComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddItemComponent.prototype, "addItem", void 0);
AddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-module/add-item/add-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-item.component.scss */ "./src/app/shared/form-module/add-item/add-item.component.scss")).default]
    })
], AddItemComponent);



/***/ }),

/***/ "./src/app/shared/form-module/form-module.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/form-module/form-module.ts ***!
  \***************************************************/
/*! exports provided: AppFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFormModule", function() { return AppFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-item/add-item.component */ "./src/app/shared/form-module/add-item/add-item.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/shared/form-module/login-form/login-form.component.ts");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/shared/form-module/registration-form/registration-form.component.ts");

/* IMPORTS */


 // To use [(ngModel)]




/* DEFINITION */
let AppFormModule = 
/* EXPORT */
class AppFormModule {
};
AppFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationFormComponent"], _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["LoginFormComponent"], _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_5__["AddItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]],
        exports: [_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationFormComponent"], _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["LoginFormComponent"], _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_5__["AddItemComponent"]]
    })
    /* EXPORT */
], AppFormModule);

;


/***/ }),

/***/ "./src/app/shared/form-module/login-form/login-form.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shared/form-module/login-form/login-form.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 768px) {\n  button[type=submit] {\n    display: flex;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9FbGlzYWJldGgvRGVza3RvcC9tZWFsLXBsYW4tYXBwL2FuZ3VsYXJDbGllbnQvc3JjL2FwcC9zaGFyZWQvZm9ybS1tb2R1bGUvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvZm9ybS1tb2R1bGUvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsV0FBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9ybS1tb2R1bGUvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3VibWl0IGJ1dHRvbiBmdWxsd2lkdGggb24gbW9iaWxlXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbiIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/form-module/login-form/login-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/form-module/login-form/login-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

/* IMPORTS */


/* DEFINITION & EXPORT */
let LoginFormComponent = class LoginFormComponent {
    // DEPENDENCIES INJECTION
    constructor(FormBuilder) {
        this.FormBuilder = FormBuilder;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.notRegistered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // METHODS
        // reset form
        this.resetForm = () => {
            this.formData = this.FormBuilder.group({
                email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        };
    }
    // LIFECYCLE HOOKS
    ngOnInit() {
        this.resetForm();
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LoginFormComponent.prototype, "formSubmit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LoginFormComponent.prototype, "notRegistered", void 0);
LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-module/login-form/login-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-form.component.scss */ "./src/app/shared/form-module/login-form/login-form.component.scss")).default]
    })
], LoginFormComponent);



/***/ }),

/***/ "./src/app/shared/form-module/registration-form/registration-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/form-module/registration-form/registration-form.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 768px) {\n  button[type=submit] {\n    display: flex;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9FbGlzYWJldGgvRGVza3RvcC9tZWFsLXBsYW4tYXBwL2FuZ3VsYXJDbGllbnQvc3JjL2FwcC9zaGFyZWQvZm9ybS1tb2R1bGUvcmVnaXN0cmF0aW9uLWZvcm0vcmVnaXN0cmF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9mb3JtLW1vZHVsZS9yZWdpc3RyYXRpb24tZm9ybS9yZWdpc3RyYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLFdBQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvcm0tbW9kdWxlL3JlZ2lzdHJhdGlvbi1mb3JtL3JlZ2lzdHJhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3VibWl0IGJ1dHRvbiBmdWxsd2lkdGggb24gbW9iaWxlXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbiIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/form-module/registration-form/registration-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/form-module/registration-form/registration-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

/* IMPORTS */


/* DEFINITION */
let RegistrationFormComponent = 
/* EXPORT */
// export class RegistrationFormComponent implements OnInit {
//   @Input() formObject: UserModel;
//   // The @Output() decorator enable component to send data to main component with an event
//   @Output() sendFormData = new EventEmitter();
//   // Create a varible to toggle the form
//   // public formIsOpen: Boolean = false;
//   // Create an object for errors
//   public formError;
//   public formData: FormGroup;
//   @Output() formSubmit = new EventEmitter();
//   constructor(private FormBuilder: FormBuilder) { }
//   // Create a function to reset form error
//   private resetFormError = () => {
//     this.formError = {
//       score: 0,
//       firstName: false,
//       lastName: false,
//       email: false,
//       password: false,
//       repeatpassword: false,
//       cgu: false
//     };
//     this.formData = this.FormBuilder.group({
//       firstName: [null, Validators.required],
//       lastName: [null, Validators.required],
//       email: [null, Validators.required],
//       password: [null, Validators.required],
//       repeatpassword: [null, Validators.required],
//     });
//   }
//   // Create a function to manipulate checkbox
//   // public checkConditions = () => {
//   //   // Invert value
//   //   this.formObject.cgu = !this.formObject.cgu;
//   //   // Hide error
//   //   this.formError.cgu = false;
//   // }
//   // Creta a function for the form submission
//   // public formSubmission = () => {
//   //   // Reset errors
//   //   this.resetFormError()
//   //   // Test mandatory fields: firstName
//   //   if (this.formObject.firstName.length <= 1) {
//   //     this.formError.score++;
//   //     this.formError.firstName = true;
//   //   }
//   //   // Test mandatory fields: lastName
//   //   if (this.formObject.lastName.length <= 1) {
//   //     this.formError.score++;
//   //     this.formError.lastName = true;
//   //   }
//   //   // Test mandatory fields: email
//   //   if (this.formObject.email.length <= 1) {
//   //     this.formError.score++;
//   //     this.formError.email = true;
//   //   }
//   //   // Test mandatory fields: password
//   //   if (this.formObject.password.length <= 4) {
//   //     this.formError.score++;
//   //     this.formError.password = true;
//   //   }
//   //   // Test mandatory fields: repeatpassword
//   //   if (this.formObject.password != this.formObject.repeatpassword) {
//   //     this.formError.score++;
//   //     this.formError.repeatpassword = true;
//   //   }
//   //   // Test mandatory fields: CGU
//   //   if (!this.formObject.cgu) {
//   //     this.formError.score++;
//   //     this.formError.cgu = true;
//   //   }
//   //   /* FINAL VALIDATION */
//   //   this.formError.score === 0 ? this.sendFormData.emit(this.formObject) : null;
//   // }
//   ngOnInit() {
//     // Reset errors when component is loaded
//     this.resetFormError()
//   }
// }
class RegistrationFormComponent {
    // Inject FormBuilder
    constructor(FormBuilder) {
        this.FormBuilder = FormBuilder;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Method to reset form
        this.resetForm = () => {
            this.formData = this.FormBuilder.group({
                firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                lastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                repeatpassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        };
    }
    // Start
    ngOnInit() {
        this.resetForm();
    }
};
RegistrationFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RegistrationFormComponent.prototype, "formSubmit", void 0);
RegistrationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-module/registration-form/registration-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration-form.component.scss */ "./src/app/shared/form-module/registration-form/registration-form.component.scss")).default]
    })
    /* EXPORT */
    // export class RegistrationFormComponent implements OnInit {
    //   @Input() formObject: UserModel;
    //   // The @Output() decorator enable component to send data to main component with an event
    //   @Output() sendFormData = new EventEmitter();
    //   // Create a varible to toggle the form
    //   // public formIsOpen: Boolean = false;
    //   // Create an object for errors
    //   public formError;
    //   public formData: FormGroup;
    //   @Output() formSubmit = new EventEmitter();
    //   constructor(private FormBuilder: FormBuilder) { }
    //   // Create a function to reset form error
    //   private resetFormError = () => {
    //     this.formError = {
    //       score: 0,
    //       firstName: false,
    //       lastName: false,
    //       email: false,
    //       password: false,
    //       repeatpassword: false,
    //       cgu: false
    //     };
    //     this.formData = this.FormBuilder.group({
    //       firstName: [null, Validators.required],
    //       lastName: [null, Validators.required],
    //       email: [null, Validators.required],
    //       password: [null, Validators.required],
    //       repeatpassword: [null, Validators.required],
    //     });
    //   }
    //   // Create a function to manipulate checkbox
    //   // public checkConditions = () => {
    //   //   // Invert value
    //   //   this.formObject.cgu = !this.formObject.cgu;
    //   //   // Hide error
    //   //   this.formError.cgu = false;
    //   // }
    //   // Creta a function for the form submission
    //   // public formSubmission = () => {
    //   //   // Reset errors
    //   //   this.resetFormError()
    //   //   // Test mandatory fields: firstName
    //   //   if (this.formObject.firstName.length <= 1) {
    //   //     this.formError.score++;
    //   //     this.formError.firstName = true;
    //   //   }
    //   //   // Test mandatory fields: lastName
    //   //   if (this.formObject.lastName.length <= 1) {
    //   //     this.formError.score++;
    //   //     this.formError.lastName = true;
    //   //   }
    //   //   // Test mandatory fields: email
    //   //   if (this.formObject.email.length <= 1) {
    //   //     this.formError.score++;
    //   //     this.formError.email = true;
    //   //   }
    //   //   // Test mandatory fields: password
    //   //   if (this.formObject.password.length <= 4) {
    //   //     this.formError.score++;
    //   //     this.formError.password = true;
    //   //   }
    //   //   // Test mandatory fields: repeatpassword
    //   //   if (this.formObject.password != this.formObject.repeatpassword) {
    //   //     this.formError.score++;
    //   //     this.formError.repeatpassword = true;
    //   //   }
    //   //   // Test mandatory fields: CGU
    //   //   if (!this.formObject.cgu) {
    //   //     this.formError.score++;
    //   //     this.formError.cgu = true;
    //   //   }
    //   //   /* FINAL VALIDATION */
    //   //   this.formError.score === 0 ? this.sendFormData.emit(this.formObject) : null;
    //   // }
    //   ngOnInit() {
    //     // Reset errors when component is loaded
    //     this.resetFormError()
    //   }
    // }
], RegistrationFormComponent);



/***/ })

}]);
//# sourceMappingURL=default~pages-barcode-scanner-barcode-scanner-module~pages-home-page-home-page-module~pages-inventor~9472ef19.js.map