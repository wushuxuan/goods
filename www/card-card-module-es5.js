(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-card-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/card/card.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card/card.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>详情页</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-card>\n    <img [src]=\"url\" />\n    <ion-card-header>\n      <!-- <ion-card-subtitle>商品详情</ion-card-subtitle> -->\n      <ion-card-title>详情</ion-card-title>\n    </ion-card-header>\n    <ion-card-content style=\"padding-top:0px\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div>长：{{long}} <span class='tip'> ( m ) </span></div>\n          </ion-col>\n          <ion-col>\n            <div>宽：{{wide}} <span class='tip'> ( m ) </span></div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div>高：{{high}} <span class='tip'> ( m ) </span></div>\n          </ion-col>\n          <ion-col>\n            <div>重量：{{weight}} <span class='tip'> ( kg ) </span></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/card/card-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/card/card-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageRoutingModule", function() { return CardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.page */ "./src/app/card/card.page.ts");




var routes = [
    {
        path: '',
        component: _card_page__WEBPACK_IMPORTED_MODULE_3__["CardPage"]
    }
];
var CardPageRoutingModule = /** @class */ (function () {
    function CardPageRoutingModule() {
    }
    CardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CardPageRoutingModule);
    return CardPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/card/card.module.ts":
/*!*************************************!*\
  !*** ./src/app/card/card.module.ts ***!
  \*************************************/
/*! exports provided: CardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageModule", function() { return CardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-routing.module */ "./src/app/card/card-routing.module.ts");
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card.page */ "./src/app/card/card.page.ts");







var CardPageModule = /** @class */ (function () {
    function CardPageModule() {
    }
    CardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _card_routing_module__WEBPACK_IMPORTED_MODULE_5__["CardPageRoutingModule"]
            ],
            declarations: [_card_page__WEBPACK_IMPORTED_MODULE_6__["CardPage"]]
        })
    ], CardPageModule);
    return CardPageModule;
}());



/***/ }),

/***/ "./src/app/card/card.page.scss":
/*!*************************************!*\
  !*** ./src/app/card/card.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/card/card.page.ts":
/*!***********************************!*\
  !*** ./src/app/card/card.page.ts ***!
  \***********************************/
/*! exports provided: CardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPage", function() { return CardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CardPage = /** @class */ (function () {
    function CardPage(router, route) {
        this.router = router;
        this.route = route;
    }
    CardPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.url = params.url,
                _this.long = params.long;
            _this.wide = params.wide;
            _this.high = params.high;
            _this.weight = params.weight;
        });
    };
    CardPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! raw-loader!./card.page.html */ "./node_modules/raw-loader/index.js!./src/app/card/card.page.html"),
            styles: [__webpack_require__(/*! ./card.page.scss */ "./src/app/card/card.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CardPage);
    return CardPage;
}());



/***/ })

}]);
//# sourceMappingURL=card-card-module-es5.js.map