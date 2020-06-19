(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/barcode-scanner/barcode-scanner.module": [
		"./src/app/pages/barcode-scanner/barcode-scanner.module.ts",
		"default~pages-barcode-scanner-barcode-scanner-module~pages-home-page-home-page-module~pages-inventor~9472ef19",
		"pages-barcode-scanner-barcode-scanner-module"
	],
	"./pages/home-page/home-page.module": [
		"./src/app/pages/home-page/home-page.module.ts",
		"default~pages-barcode-scanner-barcode-scanner-module~pages-home-page-home-page-module~pages-inventor~9472ef19",
		"pages-home-page-home-page-module"
	],
	"./pages/inventory/inventory.module": [
		"./src/app/pages/inventory/inventory.module.ts",
		"default~pages-barcode-scanner-barcode-scanner-module~pages-home-page-home-page-module~pages-inventor~9472ef19",
		"common",
		"pages-inventory-inventory-module"
	],
	"./pages/meal-plan/meal-plan.module": [
		"./src/app/pages/meal-plan/meal-plan.module.ts",
		"default~pages-barcode-scanner-barcode-scanner-module~pages-home-page-home-page-module~pages-inventor~9472ef19",
		"pages-meal-plan-meal-plan-module"
	],
	"./pages/recipes/recipes.module": [
		"./src/app/pages/recipes/recipes.module.ts",
		"default~pages-barcode-scanner-barcode-scanner-module~pages-home-page-home-page-module~pages-inventor~9472ef19",
		"pages-recipes-recipes-module"
	],
	"./pages/shopping-list/shopping-list.module": [
		"./src/app/pages/shopping-list/shopping-list.module.ts",
		"default~pages-barcode-scanner-barcode-scanner-module~pages-home-page-home-page-module~pages-inventor~9472ef19",
		"common",
		"pages-shopping-list-shopping-list-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Use the my-header.component.ts -->\n<app-my-header [path]=\"'/'\"\n  [title]=\"'Welcome to the home page'\"></app-my-header>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/user-interface/my-header/my-header.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/user-interface/my-header/my-header.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <nav class=\"navbar is-primary\">\n        <div class=\"navbar-brand\">\n            <img src=\"assets/img/logo.png\"\n                alt=\"logo\"\n                id=\"logoImage\">\n            <h1 class=\"title is-3 has-text-white\">Remy</h1>\n            <a role=\"button\"\n                class=\"navbar-burger\"\n                aria-label=\"menu\"\n                aria-expanded=\"false\">\n                <span aria-hidden=\"true\"></span>\n                <span aria-hidden=\"true\"></span>\n                <span aria-hidden=\"true\"></span>\n            </a>\n        </div>\n        <div class=\"navbar-menu\">\n            <div class=\"navbar-start\">\n                <a *ngIf=\"!userData\"\n                    [routerLink]=\"'/'\"\n                    class=\"navbar-item\">Home</a>\n                <a *ngIf=\"userData\"\n                    [routerLink]=\"'/shopping-list'\"\n                    class=\"navbar-item\">Liste de courses</a>\n                <a *ngIf=\"userData\"\n                    [routerLink]=\"'/barcode-scanner'\"\n                    class=\"navbar-item\">Scanner</a>\n                <a *ngIf=\"userData\"\n                    [routerLink]=\"'/inventory'\"\n                    class=\"navbar-item\">Inventaire</a>\n                <a *ngIf=\"userData\"\n                    [routerLink]=\"'/recipes'\"\n                    class=\"navbar-item\">Recettes</a>\n                <a *ngIf=\"userData\"\n                    [routerLink]=\"'/meal-plan'\"\n                    class=\"navbar-item\">Planning</a>\n                <a *ngIf=\"userData\"\n                    (click)=\"logout()\"\n                    class=\"navbar-item\">Log out</a>\n            </div>\n        </div>\n    </nav>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/user-interface/single-inventory-item/single-inventory-item.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/user-interface/single-inventory-item/single-inventory-item.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<li>\n    <div class=\"field has-addons\">\n        <div class=\"control\" (click)=\"removeItemFromInventory.emit(item)\">\n            <span>\n                <fa-icon\n                    [icon]=\"faTimes\"\n                    aria-role=\"button\"></fa-icon>\n            </span>\n        </div>\n        <div class=\"control\">\n            <p>{{ item.name }}</p>\n        </div>\n        <div class=\"control\">\n            <button (click)=\"decrementQty.emit(item)\" class=\"button is-primary is-small\"><fa-icon [icon]=\"faMinus\"\n                aria-role=\"button\"></fa-icon></button>\n            <span class=\"button is-primary is-small is-outlined\">{{ item.quantity }}</span>\n            <button (click)=\"incrementQty.emit(item._id)\" class=\"button is-primary is-small\"><fa-icon [icon]=\"faPlus\"\n                aria-role=\"button\"></fa-icon></button>\n        </div>\n    </div>\n</li>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/user-interface/single-item/single-item.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/user-interface/single-item/single-item.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<li>\n    <div class=\"field\">\n        <input class=\"is-checkradio\" type=\"checkbox\" name=\"{{ item.name }}\" id=\"{{ item.name }}\" (change)=\"addItemToInventory.emit(item._id)\">\n        <label for=\"{{ item.name }}\">\n            {{ item.name }}\n        </label>\n    </div>\n</li>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-router.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-router.module.ts ***!
  \**************************************/
/*! exports provided: AppRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouter", function() { return AppRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");



/* Define APP routes */
const mainRoutes = [
    {
        path: '',
        loadChildren: './pages/home-page/home-page.module#HomePageModule' // Lazy Load
    },
    {
        path: 'shopping-list',
        loadChildren: './pages/shopping-list/shopping-list.module#ShoppingListModule',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'barcode-scanner',
        loadChildren: './pages/barcode-scanner/barcode-scanner.module#BarcodeScannerModule',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'inventory',
        loadChildren: './pages/inventory/inventory.module#InventoryModule',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'recipes',
        loadChildren: './pages/recipes/recipes.module#RecipesModule',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    {
        path: 'meal-plan',
        loadChildren: './pages/meal-plan/meal-plan.module#MealPlanModule',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
];
/* Export */
const AppRouter = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(mainRoutes);


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");

/* Import */



/* DEFINITION */
let AppComponent = 
/* EXPORT */
class AppComponent {
    constructor(AuthService, Router) {
        this.AuthService = AuthService;
        this.Router = Router;
        this.title = 'Remy';
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // redirect to 'connected' page if user is logged
            return new Promise((resolve) => {
                this.AuthService.getUserInfo()
                    .then((apiResponse) => {
                    console.log(apiResponse);
                    if (apiResponse.message === 'Identity found') {
                        return resolve(this.Router.navigateByUrl('/shopping-list'));
                    }
                })
                    // don't reject with apiError to avoid console error on home page at first loading
                    .catch(() => {
                    this.Router.navigateByUrl('/');
                });
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
    /* EXPORT */
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _app_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-router.module */ "./src/app/app-router.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/user-interface/user-interface.module */ "./src/app/shared/user-interface/user-interface.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

/* Import */

 // permet les calls http dans l'app


// App router
 // AppRouter est un module
//

// Modules


/* DEFINITION */
let AppModule = 
/* EXPORT */
class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_router_module__WEBPACK_IMPORTED_MODULE_5__["AppRouter"],
            _shared_user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_7__["UserInterfaceModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
    /* EXPORT */
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");

/* IMPORTS */



/* DEFINITION & EXPORT */
let AuthGuard = class AuthGuard {
    // DEPENDENCIES INJECTION
    constructor(AuthService, Router) {
        this.AuthService = AuthService;
        this.Router = Router;
    }
    canActivate() {
        return new Promise((resolve, reject) => {
            this.AuthService.getUserInfo()
                .then((apiResponse) => {
                if (apiResponse.message === 'User data from token found') {
                    return resolve(true);
                }
                else {
                    this.Router.navigateByUrl('/');
                }
            })
                // don't reject with apiError to avoid console error on home page at first loading
                .catch(() => {
                this.Router.navigateByUrl('/');
            });
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



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
/* harmony import */ var _observables_observables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observables/observables.service */ "./src/app/services/observables/observables.service.ts");

/* IMPORTS */



/* DEFINITION & EXPORT */
let AuthService = class AuthService {
    // DEPENDENCIES INJECTION
    constructor(HttpClient, ObservablesService) {
        this.HttpClient = HttpClient;
        this.ObservablesService = ObservablesService;
        // PROPERTIES
        this.apiUrl = '/api/auth';
        // METHODS
        // request headers settings
        this.setHeaders = () => {
            // set header
            const myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            myHeader.append('Content-Type', 'application/json');
            // return header
            return { headers: myHeader };
        };
        // Fonction to parse SUCCESS response
        this.getData = (endpoint, apiResponse) => {
            switch (endpoint) {
                case 'logout':
                    this.ObservablesService.setObservableData('user', null);
                    break;
                default:
                    // Set user info Observable value
                    this.ObservablesService.setObservableData('user', apiResponse.data);
                    break;
            }
            // Return data
            return apiResponse || {};
        };
        // Fonction to parse ERROR response
        this.handleError = (apiError) => Promise.reject(apiError.error);
    }
    // register new user
    registerUser(user) {
        // Delete repeatpassword property from the user object (for checkFields)
        delete user.repeatpassword;
        return this.HttpClient
            .post(`${this.apiUrl}/register`, user, this.setHeaders())
            .toPromise()
            .then(data => this.getData('register', data))
            .catch(this.handleError);
    }
    logInUser(credentials) {
        return this.HttpClient
            .post(`${this.apiUrl}/login`, credentials, this.setHeaders())
            .toPromise()
            .then(data => this.getData('login', data))
            .catch(this.handleError);
    }
    logOutUser() {
        return this.HttpClient
            .get(`${this.apiUrl}/logout`, this.setHeaders())
            .toPromise()
            .then(data => this.getData('logout', data))
            .catch(this.handleError);
    }
    // get user info
    getUserInfo() {
        return this.HttpClient
            .get(this.apiUrl)
            .toPromise()
            .then(data => this.getData('auth', data))
            .catch(this.handleError);
    }
    ;
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _observables_observables_service__WEBPACK_IMPORTED_MODULE_3__["ObservablesService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthService);



/***/ }),

/***/ "./src/app/services/observables/observables.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/observables/observables.service.ts ***!
  \*************************************************************/
/*! exports provided: ObservablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservablesService", function() { return ObservablesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

/* IMPORTS */


/* DEFINITION AND EXPORT */
let ObservablesService = class ObservablesService {
    constructor() {
        // Observable subjects
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
        this.shoppingList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](localStorage.getItem('shopping-list') ? JSON.parse(localStorage.getItem('shopping-list')) : null);
        this.inventory = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](localStorage.getItem('inventory') ? JSON.parse(localStorage.getItem('inventory')) : null);
        // update any Observable subject value from outside the service
        this.setObservableData = (type, data) => {
            switch (type) {
                case 'user':
                    this.user.next(data);
                    break;
                case 'shopping-list':
                    this.shoppingList.next(data);
                    break;
                case 'inventory':
                    this.inventory.next(data);
                    break;
                default:
                    break;
            }
            ;
            // set local storage
            // on log out, remove item instead of setting to null
            if (data === null) {
                localStorage.removeItem(type);
            }
            else {
                localStorage.setItem(type, JSON.stringify(data));
            }
        };
        // get any Observable subject value from outside the service
        this.getObservableData = (type) => {
            switch (type) {
                case 'user':
                    return this.user;
                    break;
                case 'shopping-list':
                    return this.shoppingList;
                    break;
                case 'inventory':
                    return this.inventory;
                    break;
                default:
                    break;
            }
            ;
        };
    }
};
ObservablesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ObservablesService);



/***/ }),

/***/ "./src/app/shared/user-interface/my-header/my-header.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/user-interface/my-header/my-header.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  margin-bottom: 0;\n  margin-left: 0.75rem;\n  line-height: 1.6;\n}\n\n.navbar-brand {\n  padding: 1rem 1.5rem;\n}\n\n@media screen and (min-width: 1024px) {\n  .navbar-start.navbar-item {\n    color: #fff;\n  }\n}\n\n#logoImage {\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9FbGlzYWJldGgvRGVza3RvcC9tZWFsLXBsYW4tYXBwL2FuZ3VsYXJDbGllbnQvc3JjL2FwcC9zaGFyZWQvdXNlci1pbnRlcmZhY2UvbXktaGVhZGVyL215LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3VzZXItaW50ZXJmYWNlL215LWhlYWRlci9teS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUFnQixvQkFBQTtBQ0VoQjs7QURBQTtFQUNJO0lBQ0ksV0FBQTtFQ0dOO0FBQ0Y7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3VzZXItaW50ZXJmYWNlL215LWhlYWRlci9teS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLWxlZnQ6IC43NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4ubmF2YmFyLWJyYW5kIHsgcGFkZGluZzogMXJlbSAxLjVyZW07IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpe1xuICAgIC5uYXZiYXItc3RhcnQubmF2YmFyLWl0ZW0ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG59XG5cbiNsb2dvSW1hZ2Uge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cbiIsIi50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAubmF2YmFyLXN0YXJ0Lm5hdmJhci1pdGVtIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuI2xvZ29JbWFnZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/user-interface/my-header/my-header.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/user-interface/my-header/my-header.component.ts ***!
  \************************************************************************/
/*! exports provided: MyHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHeaderComponent", function() { return MyHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_observables_observables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/observables/observables.service */ "./src/app/services/observables/observables.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");

/* IMPORTS */




/* DEFINITION */
let MyHeaderComponent = 
/* EXPORT */
class MyHeaderComponent {
    // DEPENDENCIES INJECTION
    constructor(Router, ObservablesService, AuthService) {
        this.Router = Router;
        this.ObservablesService = ObservablesService;
        this.AuthService = AuthService;
        // METHODS
        // log out user
        this.logout = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // log in user in Api
            const userInfo = yield this.AuthService.logOutUser();
            console.log(userInfo);
            // if logout is successful, redirect to home
            if (userInfo.data === "User logged out.") {
                this.Router.navigateByUrl('/');
            }
            // Set user info observable value
            this.ObservablesService.setObservableData('user', null);
            this.ObservablesService.setObservableData('shopping-list', null);
            this.ObservablesService.setObservableData('inventory', null);
        });
        this.setToggleBurgerNavEventListener = () => {
            const burger = document.querySelector('.navbar-burger');
            const menu = document.querySelector('.navbar-menu');
            burger.addEventListener('click', () => {
                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                burger.classList.toggle('is-active');
                menu.classList.toggle('is-active');
            });
        };
        // get user data observer
        this.ObservablesService
            .getObservableData('user')
            .subscribe(userDataObserver => { this.userData = userDataObserver; });
    }
    ngOnInit() {
        this.setToggleBurgerNavEventListener();
    }
};
MyHeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_observables_observables_service__WEBPACK_IMPORTED_MODULE_3__["ObservablesService"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MyHeaderComponent.prototype, "path", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MyHeaderComponent.prototype, "headerTitle", void 0);
MyHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/user-interface/my-header/my-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-header.component.scss */ "./src/app/shared/user-interface/my-header/my-header.component.scss")).default]
    })
    /* EXPORT */
], MyHeaderComponent);



/***/ }),

/***/ "./src/app/shared/user-interface/single-inventory-item/single-inventory-item.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/user-interface/single-inventory-item/single-inventory-item.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91c2VyLWludGVyZmFjZS9zaW5nbGUtaW52ZW50b3J5LWl0ZW0vc2luZ2xlLWludmVudG9yeS1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/user-interface/single-inventory-item/single-inventory-item.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/user-interface/single-inventory-item/single-inventory-item.component.ts ***!
  \************************************************************************************************/
/*! exports provided: SingleInventoryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleInventoryItemComponent", function() { return SingleInventoryItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



let SingleInventoryItemComponent = class SingleInventoryItemComponent {
    constructor() {
        this.incrementQty = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.decrementQty = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeItemFromInventory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"];
        this.faMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMinus"];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SingleInventoryItemComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SingleInventoryItemComponent.prototype, "incrementQty", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SingleInventoryItemComponent.prototype, "decrementQty", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SingleInventoryItemComponent.prototype, "removeItemFromInventory", void 0);
SingleInventoryItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-inventory-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-inventory-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/user-interface/single-inventory-item/single-inventory-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-inventory-item.component.scss */ "./src/app/shared/user-interface/single-inventory-item/single-inventory-item.component.scss")).default]
    })
], SingleInventoryItemComponent);



/***/ }),

/***/ "./src/app/shared/user-interface/single-item/single-item.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/user-interface/single-item/single-item.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91c2VyLWludGVyZmFjZS9zaW5nbGUtaXRlbS9zaW5nbGUtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/user-interface/single-item/single-item.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/user-interface/single-item/single-item.component.ts ***!
  \****************************************************************************/
/*! exports provided: SingleItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleItemComponent", function() { return SingleItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SingleItemComponent = class SingleItemComponent {
    constructor() {
        this.addItemToInventory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SingleItemComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SingleItemComponent.prototype, "addItemToInventory", void 0);
SingleItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/user-interface/single-item/single-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-item.component.scss */ "./src/app/shared/user-interface/single-item/single-item.component.scss")).default]
    })
], SingleItemComponent);



/***/ }),

/***/ "./src/app/shared/user-interface/user-interface.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/user-interface/user-interface.module.ts ***!
  \****************************************************************/
/*! exports provided: UserInterfaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterfaceModule", function() { return UserInterfaceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _my_header_my_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-header/my-header.component */ "./src/app/shared/user-interface/my-header/my-header.component.ts");
/* harmony import */ var _single_item_single_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-item/single-item.component */ "./src/app/shared/user-interface/single-item/single-item.component.ts");
/* harmony import */ var _single_inventory_item_single_inventory_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./single-inventory-item/single-inventory-item.component */ "./src/app/shared/user-interface/single-inventory-item/single-inventory-item.component.ts");

/* IMPORTS */

 // To use global Angular common directives





/* DEFINITION */
let UserInterfaceModule = 
/* EXPORT */
class UserInterfaceModule {
};
UserInterfaceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        // Import the components
        declarations: [_my_header_my_header_component__WEBPACK_IMPORTED_MODULE_5__["MyHeaderComponent"], _single_item_single_item_component__WEBPACK_IMPORTED_MODULE_6__["SingleItemComponent"], _single_inventory_item_single_inventory_item_component__WEBPACK_IMPORTED_MODULE_7__["SingleInventoryItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]],
        // Export the components to enable access from main component
        exports: [_my_header_my_header_component__WEBPACK_IMPORTED_MODULE_5__["MyHeaderComponent"], _single_item_single_item_component__WEBPACK_IMPORTED_MODULE_6__["SingleItemComponent"], _single_inventory_item_single_inventory_item_component__WEBPACK_IMPORTED_MODULE_7__["SingleInventoryItemComponent"]]
    })
    /* EXPORT */
], UserInterfaceModule);

;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Elisabeth/Desktop/meal-plan-app/angularClient/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map