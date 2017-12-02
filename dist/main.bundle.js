webpackJsonp(["main"],{

/***/ "../../../../../directives/webdev-sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebdevSortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebdevSortableDirective = (function () {
    function WebdevSortableDirective(el) {
        this.el = el;
        this.orderChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    WebdevSortableDirective.prototype.ngAfterViewInit = function () { this.onAfterViewInit(this); };
    WebdevSortableDirective.prototype.onAfterViewInit = function (element) {
        jQuery(this.el.nativeElement).sortable({
            start: function (event, ui) {
                this.start = ui.item.index();
            },
            stop: function (event, ui) {
                this.stop = ui.item.index();
                var index = { start: this.start, stop: this.stop };
                element.orderChanged.emit(index);
            }
        });
    };
    return WebdevSortableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], WebdevSortableDirective.prototype, "orderChanged", void 0);
WebdevSortableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appWebDevSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], WebdevSortableDirective);

var _a;
//# sourceMappingURL=webdev-sortable.directive.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_webdev_sortable_directive__ = __webpack_require__("../../../../../directives/webdev-sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__node_modules_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_28__directives_webdev_sortable_directive__["a" /* WebdevSortableDirective */],
            __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_27__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_30__node_modules_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_33__services_flickr_service_client__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_34__services_shared_service_client__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_35__services_authentication_service_client__["a" /* AuthenticationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");















// Import all other components here
var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'default', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_authentication_service_client__["a" /* AuthenticationService */]] },
    // {path: 'facebook/oauth2callback', component: ProfileComponent},
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>\r\n    Angular 4 MEAN stack app\r\n  </h1>\r\n\r\n\r\n  <h3>\r\n    App works\r\n  </h3>\r\n\r\n\r\n  <h4>\r\n    <a href=\"test\">Test MongoDB</a>\r\n  </h4>\r\n\r\n  <h4>\r\n    <a href=\"../../../assets/index.html\">Assignment 2</a>\r\n  </h4>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"col-sm-3 hidden-xs\">\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand\">\n          <b>\n            Pages\n          </b>\n        </a>\n      </div>\n      <p class=\"navbar-brand pull-right\">\n        <button class=\"navbar-link jj-button\" (click)=\"newPage()\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </p>\n    </div>\n    <div class=\"col-sm-9\">\n      <div class=\"navbar-brand pull-left\">\n        <button (click)=\"goToPages()\" class=\"navbar-link jj-button\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </button>\n      </div>\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>\n            Edit Page\n          </b>\n        </a>\n      </div>\n\n      <p class=\"navbar-brand pull-right\">\n        <button (click)=\"commit(pageId.valueOf(), name.valueOf(), description.valueOf())\" class=\"navbar-link jj-button\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </button>\n      </p>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid jj-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 hidden-xs\">\n      <div *ngFor=\"let page of pages\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <button class=\"jj-button-cog\" (click)=\"goToWidgets(page._id)\">\n                {{page.name}}\n              </button>\n            </div>\n            <div class=\"col-xs-3\">\n              <button class=\"pull-right jj-button-cog\" (click)=\"editPage(page._id)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </button>\n            </div>\n          </div>\n        </li>\n      </div>\n    </div>\n    <div class=\"col-sm-9\">\n\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\">\n            Name\n          </label>\n          <input [(ngModel)]=\"name\"\n                 name=\"name\"\n                 id=\"name\"\n                 type=\"text\"\n                 class=\"form-control\"/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"description\">\n            Description\n          </label>\n          <textarea [(ngModel)]=\"description\"\n                    placeholder=\"description\"\n                    name=\"description\"\n                    id=\"description\"\n                    class=\"form-control\"></textarea>\n        </div>\n      </form>\n      <button (click)=\"deleted(pageId)\"\n              class=\"btn btn-danger btn-block jj-button-hover\"\n              aria-pressed=\"true\">\n        Delete\n      </button>\n    </div>\n\n    <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n      <div class=\"container-fluid\">\n        <p class=\"navbar-brand pull-right\">\n          <button class=\"jj-button-cog\" (click)=\"goToProfile()\">\n            <span class=\"glyphicon glyphicon-user\"></span>\n          </button>\n        </p>\n      </div>\n    </nav>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageEditComponent = (function () {
    function PageEditComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.page = {};
        this.pages = [];
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.pageService.findPageById(this.pageId)
            .subscribe(function (page) {
            _this.page = page;
            _this.name = _this.page['name'];
            _this.description = _this.page['description'];
            _this.dateCreated = page['dateCreated'];
        });
        this.pageService.findPageByWebsiteId(this.websiteId)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    PageEditComponent.prototype.goToProfile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    PageEditComponent.prototype.commit = function (pid, name, description) {
        var _this = this;
        this.page = { _id: pid, name: name, websiteId: this.websiteId, description: description, dateCreated: this.dateCreated };
        this.pageService.updatePage(pid, this.page)
            .subscribe(function (page) {
            _this.page = page;
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    PageEditComponent.prototype.editPage = function (pgId) {
        var _this = this;
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', pgId]);
        this.pageService.findPageById(pgId)
            .subscribe(function (page) {
            _this.page = page;
            _this.name = _this.page['name'];
            _this.description = _this.page['description'];
            _this.dateCreated = page['dateCreated'];
        });
    };
    PageEditComponent.prototype.goToPages = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
    };
    PageEditComponent.prototype.newPage = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', 'new']);
    };
    PageEditComponent.prototype.goToWidgets = function (pgId) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', pgId, 'widget']);
    };
    PageEditComponent.prototype.deleted = function (pid) {
        var _this = this;
        this.pageService.deletePage(pid)
            .subscribe(function (pages) {
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    return PageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgModel */]) === "function" && _a || Object)
], PageEditComponent.prototype, "newPageForm", void 0);
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PageEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-brand pull-left\">\r\n      <button (click)=\"goToWebsites()\" class=\"navbar-link jj-button\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand\">\r\n        <b>\r\n          Pages\r\n        </b>\r\n      </a>\r\n    </div>\r\n    <p class=\"navbar-brand pull-right\">\r\n      <button class=\"navbar-link jj-button\" (click)=\"newPage()\">\r\n        <span class=\"glyphicon glyphicon-plus\"></span>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid jj-body\">\r\n  <div *ngFor=\"let page of pages\">\r\n      <li class=\"list-group-item\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-9\">\r\n            <button class=\"jj-button-cog\" (click)=\"goToWidgets(page._id)\">\r\n              {{page.name}}\r\n            </button>\r\n          </div>\r\n          <div class=\"col-xs-3\">\r\n            <button class=\"pull-right jj-button-cog\" (click)=\"editPage(page._id)\">\r\n              <span class=\"glyphicon glyphicon-cog\"></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </li>\r\n  </div>\r\n</div>\r\n\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-brand pull-right\">\r\n      <button class=\"jj-button-cog\" (click)=\"goToProfile()\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = (function () {
    function PageListComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.userId = params['uid'];
        });
        this.pageService.findPageByWebsiteId(this.websiteId)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    PageListComponent.prototype.editPage = function (pgId) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', pgId]);
    };
    PageListComponent.prototype.goToProfile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    PageListComponent.prototype.newPage = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', 'new']);
    };
    PageListComponent.prototype.goToWebsites = function () {
        this.router.navigate(['user/', this.userId, 'website']);
    };
    PageListComponent.prototype.goToWidgets = function (pgId) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', pgId, 'widget']);
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PageListComponent);

var _a, _b, _c;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"col-sm-3 hidden-xs\">\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand\">\n          <b>\n            Pages\n          </b>\n        </a>\n      </div>\n      <p class=\"navbar-brand pull-right\">\n        <button class=\"navbar-link jj-button\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </p>\n    </div>\n    <div class=\"col-sm-9\">\n      <div class=\"navbar-brand pull-left\">\n        <button (click)=\"goToPages()\" class=\"navbar-link jj-button\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </button>\n      </div>\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>\n            New Page\n          </b>\n        </a>\n      </div>\n\n      <p class=\"navbar-brand pull-right\">\n        <button (click)=\"commit(Name.value, Description.value)\" class=\"navbar-link jj-button\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </button>\n      </p>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid jj-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 hidden-xs\">\n      <div *ngFor=\"let page of pages\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <button class=\"jj-button-cog\" (click)=\"goToWidgets(page._id)\">\n                {{page.name}}\n              </button>\n            </div>\n            <div class=\"col-xs-3\">\n              <button class=\"jj-button-cog pull-right\" (click)=\"editPage(page._id)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </button>\n            </div>\n          </div>\n        </li>\n      </div>\n\n\n    </div>\n    <div class=\"col-sm-9\">\n      <form (ngSubmit)=\"newPage()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"Name\">\n            Name\n          </label>\n          <input name=\"Name\"\n                 id=\"Name\"\n                 type=\"text\"\n                 placeholder=\"Page Name\"\n                 class=\"form-control\"\n                 required\n                 ngModel\n                 #Name=\"ngModel\"/>\n          <span class=\"help-block\" *ngIf=\"Name.touched && !Name.valid\">\n              Please enter a page name!\n          </span>\n          <label for=\"Description\">\n            Description\n          </label>\n          <textarea\n            rows=\"5\"\n            placeholder=\"Description\"\n            name=\"Description\"\n            id=\"Description\"\n            class=\"form-control\"\n            required\n            ngModel\n            #Description=\"ngModel\"></textarea>\n          <span class=\"help-block\" *ngIf=\"Description.touched && !Description.valid\">\n              Please enter a page description!\n          </span>\n        </div>\n      </form>\n    </div>\n\n\n    <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n      <div class=\"container-fluid\">\n        <p class=\"navbar-brand pull-right\">\n          <button class=\"jj-button-cog\" (click)=\"goToProfile()\">\n            <span class=\"glyphicon glyphicon-user\"></span>\n          </button>\n        </p>\n      </div>\n    </nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = (function () {
    function PageNewComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pages = [];
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.userId = params['uid'];
            _this.webId = params['wid'];
        });
        this.pageService.findPageByWebsiteId(this.webId)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
        this.dateCreated = new Date();
    };
    PageNewComponent.prototype.newPage = function () {
        this.name = this.newPageForm.value.name;
        this.title = this.newPageForm.value.title;
    };
    PageNewComponent.prototype.goToProfile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    PageNewComponent.prototype.editPage = function (pgId) {
        var _this = this;
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', pgId]);
        this.pageService.findPageById(pgId)
            .subscribe(function (page) {
            _this.page = page;
            _this.name = _this.page['name'];
            _this.description = _this.page['description'];
            _this.dateCreated = page['dateCreated'];
        });
    };
    PageNewComponent.prototype.goToPages = function () {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page']);
    };
    PageNewComponent.prototype.commit = function (name, description) {
        var _this = this;
        this.page = { name: name, websiteId: this.webId, description: description, dateCreated: this.dateCreated };
        this.pageService.createPage(this.webId, this.page)
            .subscribe(function (page) {
            _this.page = page;
            _this.router.navigate(['user/', _this.userId, 'website', _this.webId, 'page']);
        });
    };
    PageNewComponent.prototype.goToWidgets = function (pgId) {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', pgId, 'widget']);
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgModel */]) === "function" && _a || Object)
], PageNewComponent.prototype, "newPageForm", void 0);
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PageNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>Test</h1>\r\n\r\n  <div *ngIf=\"alertMessage\"\r\n       class=\"alert alert-danger\">\r\n    \"Failed to create\"\r\n  </div>\r\n\r\n  <div *ngIf=\"successMessage\"\r\n       class=\"alert alert-success\">\r\n    \"Succesfully created/deleted\"\r\n  </div>\r\n\r\n  <table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n      <th>Test Message</th>\r\n      <th>&nbsp;</th>\r\n    </tr>\r\n\r\n\r\n    <tr>\r\n      <td>\r\n        <input [(ngModel)]=\"message\"\r\n               placeholder=\"message\"\r\n               class=\"form-control\"/>\r\n      </td>\r\n\r\n\r\n      <td>\r\n        <button (click)=\"createMessage()\"\r\n                class=\"btn btn-primary pull-right\">\r\n          <span class=\"glyphicon glyphicon-plus\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </thead>\r\n\r\n\r\n    <tbody>\r\n    <tr *ngFor=\"let message of messages\">\r\n      <td>\r\n        {{message.message}}\r\n      </td>\r\n      <td>\r\n        <button (click)=\"deleteMessage(message._id)\"\r\n                class=\"btn btn-danger pull-right\">\r\n          <span class=\"glyphicon glyphicon-remove\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n  <form (ngSubmit)=\"login(username.value, password.value)\" #f=\"ngForm\">\n    <input name=\"username\"\n           id=\"username\"\n           type=\"text\"\n           placeholder=\"username\"\n           class=\"form-control\"\n           ngModel\n           required\n           #username=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <input name=\"password\"\n           id=\"password\"\n           type=\"password\"\n           placeholder=\"password\"\n           class=\"form-control\"\n           ngModel\n           required\n           #password=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <button (click)=\"login(username.value, password.value)\"\n            class=\"btn btn-primary btn-block jj-button-hover\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">\n      Login\n    </button>\n    <a href=\"{{baseURL}}/facebook/login\" class=\"btn btn-primary btn-block\">\n      <span class=\"fa fa-facebook\"></span>\n      Facebook\n    </a>\n    <button class=\"btn btn-success btn-block jj-button-hover\"\n            aria-pressed=\"true\"\n            [routerLink]=\"['/register']\">\n      Register\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password!';
        this.baseURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl;
    }
    LoginComponent.prototype.ngOnInit = function () { this.errorFlag = false; };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.username = username;
        this.password = password;
        this.userService.login(this.username, this.password)
            .subscribe(function (user) {
            _this.sharedService.user = user;
            _this.router.navigate(['/profile']);
        });
        // this.userService.findUserByCredentials(this.username, this.password)
        //   .subscribe((user: any) => {
        //       if (user) {
        //         this.router.navigate(['user/', user._id]);
        //       } else {
        //         this.errorFlag = true;
        //       }
        //     }
        //   );
    };
    LoginComponent.prototype.facebook = function () {
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n\r\n<nav class=\"navbar navbar-default_blue navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b>\r\n          Profile\r\n        </b>\r\n      </a>\r\n    </p>\r\n\r\n    <p class=\"navbar-text pull-right\">\r\n      <button (click)=\"goToProfile(username, email, firstName, lastName)\"  class=\"navbar-link jj-button\">\r\n        <span class=\"jj-button-text glyphicon glyphicon-ok\"></span>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"container-fluid jj-body\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">\r\n        Username\r\n      </label>\r\n      <input [(ngModel)]=\"username\"\r\n             name=\"username\"\r\n             id=\"username\"\r\n             type=\"text\"\r\n             placeholder=\"Username\"\r\n             class=\"form-control\"/>\r\n\r\n      <label for=\"email\">\r\n        Email\r\n      </label>\r\n      <input [(ngModel)]=\"email\"\r\n             name=\"email\"\r\n             id=\"email\"\r\n             type=\"email\"\r\n             placeholder=\"Email\"\r\n             class=\"form-control\"\r\n             email/>\r\n\r\n      <label for=\"First Name\">\r\n        First Name\r\n      </label>\r\n      <input [(ngModel)]=\"firstName\"\r\n             name=\"First Name\"\r\n             id=\"First Name\"\r\n             type=\"text\"\r\n             placeholder=\"First Name\"\r\n             class=\"form-control\"/>\r\n\r\n      <label for=\"Last Name\">\r\n        Last Name\r\n      </label>\r\n      <input [(ngModel)]=\"lastName\"\r\n             name=\"Last Name\"\r\n             id=\"Last Name\"\r\n             type=\"text\"\r\n             placeholder=\"Last Name\"\r\n             class=\"form-control\"/>\r\n    </div>\r\n  </form>\r\n\r\n  <button (click)=\"websites()\"\r\n          class=\"btn btn-primary btn-block jj-button-hover\"\r\n          aria-pressed=\"true\">\r\n    Websites\r\n  </button>\r\n  <button class=\"btn btn-warning btn-block jj-button-hover\"\r\n          aria-pressed=\"true\"\r\n          (click)=\"logout()\">\r\n    Logout\r\n  </button>\r\n  <button class=\"btn btn-danger btn-block jj-button-hover\"\r\n          aria-pressed=\"true\"\r\n          (click)=\"deleteAccount(userId)\">\r\n    Delete Account\r\n  </button>\r\n\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default_blue navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <button class=\"jj-button\" (click)=\"cancelChanges()\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(sharedService, userService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.user = _this.sharedService.user || {};
        });
        this.userId = this.user['_id'];
        this.username = this.user['username'];
        this.firstName = this.user['firstName'];
        this.password = this.user['password'];
        this.lastName = this.user['lastName'];
        this.email = this.user['email'];
        // this.userService.findUserById(this.userId)
        //   .subscribe((user: any) => {
        //     this.user = user;
        //     this.username = this.user['username'];
        //     this.firstName = this.user['firstName'];
        //     this.password = this.user['password'];
        //     this.lastName = this.user['lastName'];
        //     this.email = this.user['email'];
        //   });
    };
    ProfileComponent.prototype.websites = function () {
        this.router.navigate(['user/', this.userId, 'website']);
    };
    ProfileComponent.prototype.goToProfile = function (uname, email, fname, lname) {
        var user = { username: uname, email: email, firstName: fname, lastName: lname };
        this.userService.updateUser(this.userId, user)
            .subscribe(function (user1) {
        });
    };
    ProfileComponent.prototype.cancelChanges = function () {
        this.ngOnInit();
    };
    ProfileComponent.prototype.deleteAccount = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId)
            .subscribe(function (users) {
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['/login']);
        });
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n\r\n<div class=\"container-fluid\">\r\n  <div *ngIf=\"errorFlag\"\r\n       class=\"alert alert-danger\">\r\n    {{errorMsg}}\r\n  </div>\r\n\r\n  <h1>Register</h1>\r\n  <form (ngSubmit)=\"register(username.value, password.value, email.value, firstName.value, lastName.value)\" #f=\"ngForm\">\r\n    <input name=\"username\"\r\n           id=\"username\"\r\n           type=\"text\"\r\n           placeholder=\"username\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #username=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\r\n      Please enter username!\r\n    </span>\r\n\r\n    <input name=\"password\"\r\n           id=\"password\"\r\n           type=\"password\"\r\n           placeholder=\"password\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #password=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\r\n      Please enter password!\r\n    </span>\r\n    <input name=\"verify password\"\r\n           id=\"verify_password\"\r\n           type=\"password\"\r\n           placeholder=\"verify password\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #verify_password=\"ngModel\">\r\n\r\n    <span class=\"help-block\" *ngIf=\"!verify_password.valid && verify_password.touched\">\r\n      Please enter password!\r\n    </span>\r\n    <span class=\"help-block\" *ngIf=\"verify_password.value != password.value\">\r\n      Passwords do not match!\r\n    </span>\r\n\r\n    <input name=\"email\"\r\n           id=\"email\"\r\n           type=\"text\"\r\n           placeholder=\"email\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #email=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\r\n      Please enter email!\r\n    </span>\r\n    <input name=\"firstName\"\r\n           id=\"firstName\"\r\n           type=\"text\"\r\n           placeholder=\"first name\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #firstName=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\r\n      Please enter first name!\r\n    </span>\r\n    <input name=\"lastName\"\r\n           id=\"lastName\"\r\n           type=\"text\"\r\n           placeholder=\"last name\"\r\n           class=\"form-control\"\r\n           ngModel\r\n           required\r\n           #lastName=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\r\n      Please enter last name!\r\n    </span>\r\n  </form>\r\n  <button (click)=\"registered(username.value, password.value, firstName.value, lastName.value, email.value)\"\r\n          class=\"btn btn-primary btn-block jj-button-hover\"\r\n          type=\"submit\"\r\n          aria-pressed=\"true\"\r\n          [disabled]=\"!f.valid\"\r\n          [routerLink]=\"['/register']\">\r\n    Register\r\n  </button>\r\n\r\n  <button class=\"btn btn-danger btn-block jj-button-hover\"\r\n          aria-pressed=\"true\"\r\n          [routerLink]=\"['/login']\">\r\n    Cancel\r\n  </button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (username, password, email, firstName, lastName) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.errorMsg = 'Invalid username or password!';
        this.errorFlag = false;
    };
    RegisterComponent.prototype.registered = function (username, password, firstName, lastName, email) {
        var _this = this;
        this.userService.findUserByUsername(username)
            .subscribe(function (user) {
            if (user !== null) {
                _this.errorFlag = true;
                _this.errorMsg = 'Username already in use, please choose another username!';
            }
            else {
                var user1 = { username: username, password: password, firstName: firstName, lastName: lastName, email: email };
                _this.userService.register(username, password, firstName, lastName, email)
                    .subscribe(function (user2) {
                    _this.sharedService.user = user;
                    // this.user = user2;
                    // this.user_id = user2['_id'];
                    _this.router.navigate(['/profile']);
                });
                // this.userService.createUser(user1)
                //   .subscribe((user2) => {
                //     this.user = user2;
                //     this.user_id = user2['_id'];
                //     this.router.navigate(['user/', this.user_id]);
                //   });
            }
        });
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registrationForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-default_blue navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"col-sm-3 hidden-xs\">\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand\">\n          <b>\n            Websites\n          </b>\n        </a>\n      </div>\n      <p class=\"navbar-brand pull-right\">\n        <button class=\"navbar-link jj-button\" (click)=\"newWebsite()\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </p>\n    </div>\n    <div class=\"col-sm-9\">\n      <div class=\"navbar-brand pull-left\">\n        <button (click)=\"cancel()\" class=\"navbar-link jj-button\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </button>\n      </div>\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>\n            Edit Website\n          </b>\n        </a>\n      </div>\n\n      <p class=\"navbar-brand pull-right\">\n        <button (click)=\"commit(websiteId, name.valueOf(), description.valueOf())\" class=\"navbar-link jj-button\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </button>\n      </p>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid jj-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 hidden-xs\">\n          <div *ngFor=\"let website of websites\">\n            <li class=\"list-group-item\">\n              <div class=\"row\">\n                <div class=\"col-xs-9\">\n                  <button class=\"jj-button-cog\" (click)=\"goToPages(website._id)\">\n                    {{website.name}}\n                  </button>\n                </div>\n                <div class=\"col-xs-3\">\n                  <button (click)=\"editWebsite(website._id)\" class=\"pull-right jj-button-cog\">\n                    <span class=\"glyphicon glyphicon-cog\"></span>\n                  </button>\n                </div>\n              </div>\n            </li>\n          </div>\n    </div>\n\n    <div class=\"col-sm-9\">\n\n      <form>\n        <div class=\"form-group\">\n          <label for=\"Name\">\n            Website Name\n          </label>\n          <input [(ngModel)]=\"name\"\n                 name=\"Name\"\n                 id=\"Name\"\n                 type=\"text\"\n                 placeholder=\"Website Name\"\n                 class=\"form-control\"/>\n        </div>\n      </form>\n\n      <div class=\"form-group\">\n        <label for=\"Description\">\n          Website Description\n        </label>\n        <textarea\n          [(ngModel)]=\"description\"\n          placeholder=\"Description\"\n          rows=\"5\"\n          name=\"Description\"\n          id=\"Description\"\n          class=\"form-control\"></textarea>\n      </div>\n\n      <button (click)=\"deleted(websiteId)\"\n              class=\"btn btn-danger btn-block jj-button-hover\"\n              aria-pressed=\"true\">\n        Delete\n      </button>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default_blue navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-brand pull-right\">\n      <button class=\"jj-button\" (click)=\"goToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </button>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.developerId = params['uid'];
        });
        this.websiteService.findWebsiteById(this.websiteId)
            .subscribe(function (website) {
            _this.website = website;
            _this.name = _this.website['name'];
            _this.developerId = _this.website['developerId'];
            _this.description = _this.website['description'];
            _this.dateCreated = website['dateCreated'];
        });
        this.websiteService.findWebsitesByUser(this.developerId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    WebsiteEditComponent.prototype.editWebsite = function (webId) {
        var _this = this;
        this.websiteService.findWebsiteById(webId)
            .subscribe(function (website) {
            _this.website = website;
            _this.name = _this.website['name'];
            _this.description = _this.website['description'];
            _this.router.navigate(['user/', _this.developerId, 'website', webId]);
        });
    };
    WebsiteEditComponent.prototype.commit = function (wid, name, description) {
        var _this = this;
        this.website = { _id: wid, name: name, developerId: this.developerId, description: description };
        this.websiteService.updateWebsite(wid, this.website)
            .subscribe(function (website) {
            _this.website = website;
            _this.name = website['name'];
            _this.description = website['description'];
            _this.router.navigate(['user/', _this.developerId, 'website']);
        });
    };
    WebsiteEditComponent.prototype.goToProfile = function () {
        this.router.navigate(['user/', this.developerId]);
    };
    WebsiteEditComponent.prototype.deleted = function (webId) {
        var _this = this;
        this.websiteService.deleteWebsite(webId)
            .subscribe(function (websites) {
            _this.router.navigate(['user/', _this.developerId, 'website']);
        });
    };
    WebsiteEditComponent.prototype.newWebsite = function () {
        this.router.navigate(['user/', this.developerId, 'website', 'new']);
    };
    WebsiteEditComponent.prototype.goToPages = function (webId) {
        this.router.navigate(['user/', this.developerId, 'website', webId, 'page']);
    };
    WebsiteEditComponent.prototype.cancel = function () {
        this.router.navigate(['user/', this.developerId, 'website']);
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WebsiteEditComponent);

var _a, _b, _c;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n\r\n<nav class=\"navbar navbar-default_blue navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-brand pull-left\">\r\n      <button (click)=\"goToProfile()\" class=\"navbar-link jj-button\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand\">\r\n        <b>\r\n          Websites\r\n        </b>\r\n      </a>\r\n    </div>\r\n    <p class=\"navbar-brand pull-right\">\r\n      <button class=\"navbar-link jj-button\" (click)=\"newWebsite()\">\r\n        <span class=\"glyphicon glyphicon-plus\"></span>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid jj-body\">\r\n  <div *ngFor=\"let website of websites\">\r\n    <li class=\"list-group-item\">\r\n      <button class=\"jj-button-cog\" (click)=\"goToPages(website._id)\">\r\n        {{website.name}}\r\n      </button>\r\n      <button class=\"pull-right jj-button-cog\" [routerLink]=\"['/user', website.developerId._id, 'website', website._id]\">\r\n        <span class=\"glyphicon glyphicon-cog\"></span>\r\n      </button>\r\n    </li>\r\n  </div>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default_blue navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-brand pull-right\">\r\n      <button class=\"jj-button\" (click)=\"goToProfile()\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = (function () {
    function WebsiteListComponent(_websiteService, activatedRoute, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this._websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    WebsiteListComponent.prototype.newWebsite = function () {
        this.router.navigate(['user/', this.userId, 'website', 'new']);
    };
    WebsiteListComponent.prototype.goToProfile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WebsiteListComponent.prototype.goToPages = function (webId) {
        this.router.navigate(['user/', this.userId, 'website', webId, 'page']);
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WebsiteListComponent);

var _a, _b, _c;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-default_blue navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"col-sm-3 hidden-xs\">\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand\">\n          <b>\n            Websites\n          </b>\n        </a>\n      </div>\n      <p class=\"navbar-brand pull-right\">\n        <button class=\"navbar-link jj-button\" (click)=\"goToNewWebsite()\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </p>\n    </div>\n    <div class=\"col-sm-9\">\n      <div class=\"navbar-brand pull-left\">\n        <button (click)=\"cancel()\" class=\"navbar-link jj-button\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </button>\n      </div>\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>\n            New Website\n          </b>\n        </a>\n      </div>\n\n      <p class=\"navbar-brand pull-right\">\n        <button (click)=\"commit(Name.value, Description.value)\" class=\"navbar-link jj-button\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </button>\n      </p>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid jj-body\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 hidden-xs\">\n      <div *ngFor=\"let website of websites\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-xs-9\">\n              <button class=\"jj-button-cog\" (click)=\"goToPages(website._id)\">\n                {{website.name}}\n              </button>\n            </div>\n            <div class=\"col-xs-3\">\n              <button (click)=\"editWebsite(website._id)\" class=\"pull-right jj-button-cog\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </button>\n            </div>\n          </div>\n        </li>\n      </div>\n    </div>\n    <div class=\"col-sm-9\">\n      <form (ngSubmit)=\"newWebsite()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"Name\">\n            Name\n          </label>\n          <input name=\"Name\"\n                 id=\"Name\"\n                 type=\"text\"\n                 placeholder=\"Name\"\n                 class=\"form-control\"\n                 required\n                 ngModel\n                 #Name=\"ngModel\"/>\n          <span class=\"help-block\" *ngIf=\"Name.touched && !Name.valid\">\n              Please enter a website name!\n          </span>\n          <label for=\"Description\">\n            Description\n          </label>\n          <textarea\n            placeholder=\"Description\"\n            rows=\"5\"\n            name=\"Description\"\n            id=\"Description\"\n            class=\"form-control\"\n            required\n            ngModel\n            #Description=\"ngModel\"></textarea>\n          <span class=\"help-block\" *ngIf=\"Description.touched && !Description.valid\">\n              Please enter a website description!\n          </span>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default_blue navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-brand pull-right\">\n      <button class=\"jj-button\" (click)=\"goToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </button>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(userService, activatedRoute, websiteService, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.websiteService = websiteService;
        this.router = router;
        this.websites = [];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
        this.developerId = this.userId;
        this.dateCreated = new Date();
    };
    WebsiteNewComponent.prototype.newWebsite = function () {
        this.name = this.websiteForm.value.name;
        this.description = this.websiteForm.value.description;
    };
    WebsiteNewComponent.prototype.commit = function (name, description) {
        var _this = this;
        this.website = { name: name, developerId: this.developerId, description: description, dateCreated: this.dateCreated };
        this.websiteService.createWebsite(this.developerId, this.website)
            .subscribe(function (website) {
            _this.website = website;
            _this.router.navigate(['user/', _this.developerId, 'website']);
        });
    };
    WebsiteNewComponent.prototype.editWebsite = function (webId) {
        this.router.navigate(['user/', this.developerId, 'website', webId]);
    };
    WebsiteNewComponent.prototype.goToProfile = function () {
        this.router.navigate(['user/', this.developerId]);
    };
    WebsiteNewComponent.prototype.goToNewWebsite = function () {
        this.router.navigate(['user/', this.userId, 'website', 'new']);
    };
    WebsiteNewComponent.prototype.cancel = function () {
        this.router.navigate(['user/', this.developerId, 'website']);
    };
    WebsiteNewComponent.prototype.goToPages = function (webId) {
        this.router.navigate(['user/', this.userId, 'website', webId, 'page']);
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "websiteForm", void 0);
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n\n<div class=\"container-fluid jj-body\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-brand pull-left\">\n        <button (click)=\"goToWidgets()\" class=\"navbar-link jj-button\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </button>\n      </div>\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>\n            Choose Widget\n          </b>\n        </a>\n      </div>\n    </div>\n  </nav>\n  <nav class=\"jj-widget-chooser-padding\">\n    <ul><button class=\"jj-button-cog\" (click)=\"makeWidget('HEADING')\"> Header</button></ul>\n    <ul><button class=\"jj-button-cog\" (click)=\"makeWidget('IMAGE')\"> Image</button></ul>\n    <ul><button class=\"jj-button-cog\" (click)=\"makeWidget('YOUTUBE')\"> YouTube</button></ul>\n    <ul><button class=\"jj-button-cog\" (click)=\"chooseWidget()\"> Label</button></ul>\n    <ul><button class=\"jj-button-cog\" (click)=\"makeWidget('HTML')\"> HTML</button></ul>\n    <ul><button class=\"jj-button-cog\" (click)=\"makeWidget('TEXT')\"> Text Input</button></ul>\n    <ul><button class=\"jj-button-cog\" (click)=\"chooseWidget()\"> Link</button></ul>\n    <ul><button class=\"jj-button-cog\" (click)=\"chooseWidget()\"> Button</button></ul>\n    <ul><button class=\"jj-button-cog\" (click)=\"chooseWidget()\"> Data Table</button></ul>\n    <ul><button class=\"jj-button-cog\" (click)=\"chooseWidget()\"> Repeater</button></ul>\n  </nav>\n  <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-brand pull-right\">\n        <button class=\"jj-button-cog\" (click)=\"goToProfile()\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </button>\n      </p>\n    </div>\n  </nav>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgets = [];
        this.widget = {};
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.userId = params['uid'];
            _this.webId = params['wid'];
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
        this.dateCreated = new Date();
    };
    WidgetChooserComponent.prototype.makeWidget = function (type) {
        var _this = this;
        this.widget = { widgetType: type, pageId: this.pageId };
        this.widgetService.createWidget(this.pageId, this.widget)
            .subscribe(function (page) {
            _this.widgets = page.widgets;
            var len = page.widgets.length;
            _this.widget = page.widgets[len - 1];
            _this.widget['widgetType'] = type;
            _this.widgetType = type;
            _this.widgetId = _this.widget['_id'];
            _this.router.navigate(['user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget', _this.widgetId]);
        });
    };
    WidgetChooserComponent.prototype.goToProfile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WidgetChooserComponent.prototype.goToWidgets = function () {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
    };
    WidgetChooserComponent.prototype.chooseWidget = function () {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget', 'new']);
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetChooserComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "  <div [ngSwitch]=\"widget.widgetType\">\n\n    <div *ngSwitchCase=\"'HEADING'\">\n      <app-widget-header></app-widget-header>\n    </div>\n\n    <div *ngSwitchCase=\"'IMAGE'\">\n      <app-widget-image></app-widget-image>\n    </div>\n\n    <div *ngSwitchCase=\"'YOUTUBE'\">\n      <app-widget-youtube></app-widget-youtube>\n    </div>\n\n    <div *ngSwitchCase=\"'HTML'\">\n      <app-widget-html></app-widget-html>\n    </div>\n\n    <div *ngSwitchCase=\"'TEXT'\">\n      <app-widget-text></app-widget-text>\n    </div>\n\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = (function () {
    function WidgetEditComponent(widgetService, activatedRoute) {
        var _this = this;
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.widgets = [];
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.wgid = params['wgid'];
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
        this.widgetService.findWidgetById(this.wgid)
            .subscribe(function (widget) {
            _this.widget = widget;
        });
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetEditComponent);

var _a, _b;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand pull-left\">\n      <button (click)=\"chooseWidget()\" class=\"navbar-link jj-button\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </button>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>\n          Widget Edit\n        </b>\n      </a>\n    </div>\n\n    <p class=\"navbar-brand pull-right\">\n      <button (click)=\"commit(text, size, widgetType)\" class=\"navbar-link jj-button\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </button>\n    </p>\n  </div>\n</nav>\n<div class=\"container-fluid jj-body\">\n  <div class=\"row\">\n    <form class=\"jj-form\">\n      <div class=\"form-group\">\n        <label for=\"widgetType\">\n          Name\n        </label>\n        <input [(ngModel)]=\"widgetType\"\n               name=\"widgetType\"\n               id=\"widgetType\"\n               type=\"text\"\n               class=\"form-control\"/>\n      </div>\n    </form>\n    <form class=\"jj-form\">\n      <div class=\"form-group\">\n        <label for=\"text\">\n          Text\n        </label>\n        <input [(ngModel)]=\"text\"\n               placeholder=\"Animals\"\n               name=\"text\"\n               id=\"text\"\n               class=\"form-control\"\n               type=\"text\"\n               />\n      </div>\n    </form>\n    <form class=\"jj-form\">\n      <div class=\"form-group\">\n        <label for=\"size\">\n          Size\n        </label>\n        <input [(ngModel)]=\"size\"\n               name=\"size\"\n               id=\"size\"\n               class=\"form-control\"\n               type=\"number\"\n               />\n      </div>\n    </form>\n    <button (click)=\"deleted(wgid)\"\n            class=\"btn btn-danger btn-block jj-button-hover jj-center\"\n            aria-pressed=\"true\">\n      Delete\n    </button>\n  </div>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <button class=\"jj-button-cog\" (click)=\"goToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </button>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {};
        this.widgets = [];
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.wgid = params['wgid'];
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.widgetService.findWidgetById(this.wgid)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetType = _this.widget['widgetType'];
            _this.text = _this.widget['text'];
            _this.size = _this.widget['size'];
            _this.dateCreated = widget['dateCreated'];
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetHeaderComponent.prototype.goToWidgets = function () {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
    };
    WidgetHeaderComponent.prototype.chooseWidget = function () {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
    };
    WidgetHeaderComponent.prototype.goToProfile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WidgetHeaderComponent.prototype.commit = function (text, size, type) {
        var _this = this;
        var updatedWidget = {
            _id: this.wgid,
            widgetType: type,
            pageId: this.widget['pageId'],
            size: size,
            text: text,
            dateCreated: this.dateCreated
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetType = widget['widgetType'];
            _this.text = widget['text'];
            _this.size = widget['size'];
            _this.dateCreated = widget['dateCreated'];
            _this.router.navigate(['user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetHeaderComponent.prototype.deleted = function (wgid) {
        var _this = this;
        this.widgetService.deleteWidget(wgid)
            .subscribe(function (widgets) {
            _this.router.navigate(['user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgModel */]) === "function" && _a || Object)
], WidgetHeaderComponent.prototype, "newWidgetForm", void 0);
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetHeaderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand pull-left\">\n      <button (click)=\"chooseWidget()\" class=\"navbar-link jj-button\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </button>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>\n          Widget Edit\n        </b>\n      </a>\n    </div>\n\n    <p class=\"navbar-brand pull-right\">\n      <button (click)=\"commit(text, widgetType)\" class=\"navbar-link jj-button\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </button>\n    </p>\n  </div>\n</nav>\n<div class=\"container-fluid jj-body\">\n  <div class=\"row\">\n    <form class=\"jj-form\">\n      <div class=\"form-group\">\n        <label for=\"widgetType\">\n          Name\n        </label>\n        <input [(ngModel)]=\"widgetType\"\n               name=\"widgetType\"\n               id=\"widgetType\"\n               type=\"text\"\n               class=\"form-control\"/>\n      </div>\n    </form>\n    <form class=\"jj-form\">\n      <div class=\"form-group\">\n        <label>\n          Text\n        </label>\n        <quill-editor [(ngModel)]=\"text\" name=\"text\"> </quill-editor>\n      </div>\n    </form>\n    <button (click)=\"deleted(wgid)\"\n            class=\"btn btn-danger btn-block jj-button-hover jj-center\"\n            aria-pressed=\"true\">\n      Delete\n    </button>\n  </div>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <button class=\"jj-button-cog\" (click)=\"goToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </button>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {};
        this.widgets = [];
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.wgid = params['wgid'];
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.widgetService.findWidgetById(this.wgid)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetType = _this.widget['widgetType'];
            _this.text = _this.widget['text'];
            _this.dateCreated = widget['dateCreated'];
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetHtmlComponent.prototype.goToWidgets = function () {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
    };
    WidgetHtmlComponent.prototype.chooseWidget = function () {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
    };
    WidgetHtmlComponent.prototype.goToProfile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WidgetHtmlComponent.prototype.commit = function (text, type) {
        var _this = this;
        var updatedWidget = {
            _id: this.wgid,
            widgetType: type,
            pageId: this.widget['pageId'],
            text: text,
            dateCreated: this.dateCreated
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetType = widget['widgetType'];
            _this.text = widget['text'];
            _this.dateCreated = widget['dateCreated'];
            _this.router.navigate(['user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetHtmlComponent.prototype.deleted = function (wgid) {
        var _this = this;
        this.widgetService.deleteWidget(wgid)
            .subscribe(function (widgets) {
            _this.router.navigate(['user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetHtmlComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgModel */]) === "function" && _a || Object)
], WidgetHtmlComponent.prototype, "newWidgetForm", void 0);
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetHtmlComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jj-top-padding {\r\n  margin: 70px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand pull-left\">\n      <button (click)=\"chooseWidget()\" class=\"navbar-link jj-button\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </button>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>\n          Widget Edit\n        </b>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid jj-top-padding\">\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"searchText\" name=\"searchText\" id=\"searchText\" type=\"text\" class=\"form-control\"\n           placeholder=\"Search Images\"/>\n    <span class=\"input-group-btn\">\n        <button (click)=\"searchPhotos()\" class=\"btn btn-default  jj-button-hover\" type=\"submit\">\n          <span class=\"glyphicon glyphicon-search\"></span>\n        </button>\n      </span>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div *ngFor=\"let pic of photos['photo']\"\n       class=\"col-xs-4\">\n    <img (click)=\"selectPhoto(pic)\"\n         width=\"100%\"\n         [src]=\"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\n\n    <p></p>\n  </div>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <button class=\"jj-button-cog\" (click)=\"goToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </button>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlickrImageSearchComponent = (function () {
    function FlickrImageSearchComponent(flickrService, activatedRoute, widgetService, router) {
        this.flickrService = flickrService;
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.wgid = params['wgid'];
        });
        this.widgetService.findWidgetById(this.wgid)
            .subscribe(function (widget) {
            _this.widget = widget;
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        this.widget['url'] = url;
        this.widgetService.updateWidget(this.wgid, this.widget)
            .subscribe(function (widget) {
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    FlickrImageSearchComponent.prototype.chooseWidget = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    FlickrImageSearchComponent.prototype.goToProfile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    return FlickrImageSearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], FlickrImageSearchComponent.prototype, "flickrSearchForm", void 0);
FlickrImageSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-flickr-image-search',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object])
], FlickrImageSearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=flickr-image-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jj-center {\r\n  margin: auto;\r\n  width: 99%;\r\n  padding-right: 10px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.jj-body .jj-padding {\r\n  margin: 10px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n      <div class=\"navbar-brand pull-left\">\n        <button (click)=\"chooseWidget()\" class=\"navbar-link jj-button\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </button>\n      </div>\n      <div class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>\n            Widget Edit\n          </b>\n        </a>\n      </div>\n\n      <p class=\"navbar-brand pull-right\">\n        <button (click)=\"commit(width, url)\" class=\"navbar-link jj-button\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </button>\n      </p>\n    </div>\n</nav>\n<div class=\"container-fluid jj-body\">\n  <div class=\"row\">\n    <form class=\"jj-form\">\n      <div class=\"form-group\">\n        <label for=\"widgetType\">\n          Name\n        </label>\n        <input [(ngModel)]=\"widgetType\"\n               name=\"widgetType\"\n               id=\"widgetType\"\n               type=\"text\"\n               class=\"form-control\"/>\n      </div>\n    </form>\n    <form class=\"jj-form\">\n      <div class=\"form-group\">\n        <label for=\"URL\">\n          URL\n        </label>\n        <input [(ngModel)]=\"url\"\n               type=\"url\"\n               placeholder=\"URL\"\n               name=\"URL\"\n               id=\"URL\"\n               class=\"form-control\"/>\n      </div>\n    </form>\n    <form class=\"jj-form\">\n      <div class=\"form-group\">\n        <label for=\"Width\">\n          Width\n        </label>\n        <input [(ngModel)]=\"width\"\n               name=\"Width\"\n               id=\"Width\"\n               class=\"form-control\"\n               type=\"text\"\n               value=\"100%\"/>\n      </div>\n    </form>\n    <form ngNoForm action=\"{{baseURL}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\" class=\"jj-form container-fluid\">\n      <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n      <input  name=\"widgetId\" value=\"{{wgid}}\"   style=\"display: none\"/>\n      <input  name=\"websiteId\" value=\"{{webId}}\"   style=\"display: none\"/>\n      <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n      <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n      <button (click)=\"commit(width, url)\" type=\"submit\" class=\"btn btn-block btn-primary jj-button-hover\" aria-pressed=\"true\">Upload Image</button>\n      <br/>\n    </form>\n    <button  (click)=\"flickrSearch()\" class=\"btn btn-info btn-block jj-button-hover jj-padding jj-center\" aria-pressed=\"true\">Search</button>\n    <button (click)=\"deleted(wgid)\" class=\"btn btn-danger btn-block jj-button-hover jj-padding jj-center\" aria-pressed=\"true\">Delete</button>\n  </div>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <button class=\"jj-button-cog\" (click)=\"goToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </button>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {};
        this.widgets = [];
        this.baseURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.wgid = params['wgid'];
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
        this.widgetService.findWidgetById(this.wgid)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.url = _this.widget['url'];
            _this.width = _this.widget['width'];
            _this.widgetType = _this.widget['widgetType'];
            _this.dateCreated = widget['dateCreated'];
        });
    };
    WidgetImageComponent.prototype.commit = function (width, url) {
        var _this = this;
        this.widget = {
            _id: this.widget['_id'],
            widgetType: 'IMAGE',
            pageId: this.widget['pageId'],
            width: width,
            url: url,
            dateCreated: this.dateCreated
        };
        this.widgetService.updateWidget(this.widget['_id'], this.widget)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.url = url;
            _this.width = width;
            _this.widgetType = 'IMAGE';
            _this.dateCreated = widget['dateCreated'];
            _this.router.navigate(['user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetImageComponent.prototype.goToWidgets = function () {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
    };
    WidgetImageComponent.prototype.chooseWidget = function () {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
    };
    WidgetImageComponent.prototype.goToProfile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WidgetImageComponent.prototype.deleted = function (wgid) {
        var _this = this;
        this.widgetService.deleteWidget(wgid)
            .subscribe(function (widgets) {
            _this.router.navigate(['user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetImageComponent.prototype.flickrSearch = function () {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget', this.wgid, 'flickr']);
    };
    return WidgetImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgModel */]) === "function" && _a || Object)
], WidgetImageComponent.prototype, "newWidgetForm", void 0);
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetImageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jj-body .jj-padding {\r\n  margin: 10px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand pull-left\">\n      <button (click)=\"chooseWidget()\" class=\"navbar-link jj-button\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </button>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>\n          Widget Edit\n        </b>\n      </a>\n    </div>\n\n    <p class=\"navbar-brand pull-right\">\n      <button (click)=\"commit(text, widgetType, rows, name, placeholder, formatted)\" class=\"navbar-link jj-button\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </button>\n    </p>\n  </div>\n</nav>\n\n<div class=\"container-fluid jj-body\">\n  <div class=\"form-group\">\n    <label for=\"widgetType\">Type</label>\n    <input [(ngModel)]=\"widgetType\"\n           name=\"widgetType\"\n           id=\"widgetType\"\n           type=\"text\"\n           class=\"form-control\"/>\n  </div>\n  <div>\n    <label for=\"text\">Text</label>\n    <input [(ngModel)]=\"text\" class=\"form-control\" id=\"text\"/>\n\n    <label for=\"rows\">Rows</label>\n    <input [(ngModel)]=\"rows\" class=\"form-control\" type=\"number\" id=\"rows\"/>\n    <label for=\"Name\">Name</label>\n    <div>\n      <input [(ngModel)]=\"name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Name\"\n             name=\"name\"\n             placeholder=\"Name\">\n    </div>\n\n    <label for=\"placeholder\"> Placeholder</label>\n    <input [(ngModel)]=\"placeholder\" class=\"form-control\" id=\"placeholder\" required/>\n    <div class=\"input-group\">\n      <input type=\"text\"\n             readonly\n             value=\"Formatted\"\n             class=\"form-control\"/>\n      <span class=\"input-group-addon\">\n     <input [(ngModel)]=\"formatted\"\n            type=\"checkbox\"/>\n      </span>\n    </div>\n  </div>\n  <button (click)=\"deleted(wgid)\"\n          class=\"btn btn-danger btn-block jj-button-hover container-fluid jj-padding\"\n          aria-pressed=\"true\">\n    Delete\n  </button>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <button class=\"jj-button-cog\" (click)=\"goToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </button>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetTextComponent = (function () {
    function WidgetTextComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {};
        this.widgets = [];
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.wgid = params['wgid'];
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.widgetService.findWidgetById(this.wgid)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetType = _this.widget['widgetType'];
            _this.text = _this.widget['text'];
            _this.rows = _this.widget['rows'];
            _this.name = _this.widget['name'];
            _this.placeholder = _this.widget['placeholder'];
            _this.formatted = _this.widget['formatted'];
            _this.dateCreated = widget['dateCreated'];
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetTextComponent.prototype.goToWidgets = function () {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
    };
    WidgetTextComponent.prototype.chooseWidget = function () {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
    };
    WidgetTextComponent.prototype.goToProfile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WidgetTextComponent.prototype.commit = function (text, type, rows, name, placeholder, formatted) {
        var _this = this;
        var updatedWidget = {
            _id: this.wgid,
            widgetType: type,
            pageId: this.widget['pageId'],
            text: text,
            rows: rows,
            name: name,
            placeholder: placeholder,
            formatted: formatted,
            dateCreated: this.dateCreated
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetType = widget['widgetType'];
            _this.text = widget['text'];
            _this.rows = widget['rows'];
            _this.name = widget['name'];
            _this.placeholder = widget['placeholder'];
            _this.formatted = widget['formatted'];
            _this.dateCreated = widget['dateCreated'];
            _this.router.navigate(['user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetTextComponent.prototype.deleted = function (wgid) {
        var _this = this;
        this.widgetService.deleteWidget(wgid)
            .subscribe(function (widgets) {
            _this.router.navigate(['user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetTextComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgModel */]) === "function" && _a || Object)
], WidgetTextComponent.prototype, "newWidgetForm", void 0);
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetTextComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand pull-left\">\n      <button (click)=\"chooseWidget()\" class=\"navbar-link jj-button\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </button>\n    </div>\n    <div class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>\n          Widget Edit\n        </b>\n      </a>\n    </div>\n\n    <p class=\"navbar-brand pull-right\">\n      <button (click)=\"commit(width, url)\" class=\"navbar-link jj-button\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </button>\n    </p>\n  </div>\n</nav>\n<div class=\"container-fluid jj-body\">\n  <div class=\"row\">\n    <form class=\"jj-form\">\n      <div class=\"form-group\">\n        <label for=\"widgetType\">\n          Name\n        </label>\n        <input [(ngModel)]=\"widgetType\"\n               name=\"widgetType\"\n               id=\"widgetType\"\n               type=\"text\"\n               class=\"form-control\"/>\n      </div>\n    </form>\n    <form class=\"jj-form\">\n      <div class=\"form-group\">\n        <label for=\"url\">\n          URL\n        </label>\n        <input [(ngModel)]=\"url\"\n               type=\"url\"\n               placeholder=\"url\"\n               name=\"url\"\n               id=\"url\"\n               class=\"form-control\"\n               />\n      </div>\n    </form>\n    <form class=\"jj-form\">\n      <div class=\"form-group\">\n        <label for=\"width\">\n          Width\n        </label>\n        <input [(ngModel)]=\"width\"\n               name=\"width\"\n               id=\"width\"\n               class=\"form-control\"\n               type=\"text\"/>\n      </div>\n    </form>\n    <button (click)=\"deleted(wgid)\"\n            class=\"btn btn-danger btn-block jj-button-hover jj-center\"\n            aria-pressed=\"true\">\n      Delete\n    </button>\n  </div>\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <button class=\"jj-button-cog\" (click)=\"goToProfile()\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </button>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {};
        this.widgets = [];
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.wgid = params['wgid'];
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.widgetService.findWidgetById(this.wgid)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.url = _this.widget['url'];
            _this.widgetType = _this.widget['widgetType'];
            _this.width = _this.widget['width'];
            _this.dateCreated = widget['dateCreated'];
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (page) {
            _this.widgets = page.widgets;
        });
    };
    WidgetYoutubeComponent.prototype.goToWidgets = function () {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
    };
    WidgetYoutubeComponent.prototype.chooseWidget = function () {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget']);
    };
    WidgetYoutubeComponent.prototype.goToProfile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WidgetYoutubeComponent.prototype.commit = function (width, url) {
        var _this = this;
        this.widget = {
            _id: this.widget['_id'],
            widgetType: 'YOUTUBE',
            pageId: this.widget['pageId'],
            width: width,
            url: url,
            dateCreated: this.dateCreated
        };
        this.widgetService.updateWidget(this.widget['_id'], this.widget)
            .subscribe(function (widget) {
            _this.router.navigate(['user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetYoutubeComponent.prototype.deleted = function (wgid) {
        var _this = this;
        this.widgetService.deleteWidget(wgid)
            .subscribe(function (widgets) {
            _this.router.navigate(['user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetYoutubeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgModel */]) === "function" && _a || Object)
], WidgetYoutubeComponent.prototype, "newWidgetForm", void 0);
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetYoutubeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".youtube-widget {\r\n  position: relative;\r\n  padding-bottom: 56.25%; /* 16:9 */\r\n  height: 0;\r\n}\r\n.youtube-widget iframe {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-brand pull-left \">\r\n      <button (click)=\"goToPages()\" class=\"navbar-link jj-button\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b>\r\n          Widgets\r\n        </b>\r\n      </a>\r\n    </div>\r\n    <p class=\"navbar-text pull-right\">\r\n      <button class=\"navbar-link jj-button\" (click)=\"newWidget()\">\r\n        <span class=\"glyphicon glyphicon-plus\"></span>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid jj-body\" appWebDevSortable (orderChanged)=\"onIndexChange($event)\">\r\n\r\n  <div *ngFor=\"let widget of widgets\">\r\n    <div [ngSwitch]=\"widget.widgetType\">\r\n\r\n      <div *ngSwitchCase=\"'HEADING'\">\r\n        <div class=\"jj-widget\">\r\n          <div class=\"jj-toolbar\">\r\n            <button class=\"jj-button-cog\" (click)=\"editWidget(widget._id, widget.widgetType)\">\r\n              <span class=\"glyphicon glyphicon-cog\"></span>\r\n            </button>\r\n            <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n          </div>\r\n          <div [ngSwitch]=\"widget.size\">\r\n            <div *ngSwitchCase=\"1\"><h1>{{widget.text}}</h1></div>\r\n            <div *ngSwitchCase=\"2\"><h2>{{widget.text}}</h2></div>\r\n            <div *ngSwitchCase=\"3\"><h3>{{widget.text}}</h3></div>\r\n            <div *ngSwitchCase=\"4\"><h4>{{widget.text}}</h4></div>\r\n            <div *ngSwitchCase=\"5\"><h5>{{widget.text}}</h5></div>\r\n            <div *ngSwitchCase=\"6\"><h6>{{widget.text}}</h6></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'YOUTUBE'\">\r\n        <div class=\"jj-widget\">\r\n          <div class=\"jj-toolbar\">\r\n            <button class=\"jj-button-cog\" (click)=\"editWidget(widget._id, widget.widgetType)\">\r\n              <span class=\"glyphicon glyphicon-cog\"></span>\r\n            </button>\r\n            <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n          </div>\r\n          <div class=\"youtube-widget\">\r\n            <iframe class=\"jj-content\"\r\n                    [src]=\"cleanURL(widget.url)\"\r\n                    [style.width]=\"widget.width\"\r\n                    height=\"315\"\r\n                    frameborder=\"0\"\r\n                    allowfullscreen></iframe>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-container *ngSwitchCase=\"'IMAGE'\">\r\n        <div class=\"jj-widget\">\r\n          <div class=\"jj-toolbar\">\r\n            <button class=\"jj-button-cog\" (click)=\"editWidget(widget._id, widget.widgetType)\">\r\n              <span class=\"glyphicon glyphicon-cog\"></span>\r\n            </button>\r\n            <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n          </div>\r\n          <img class=\"jj-content\" [style.width]=\"widget.width\" src=\"{{widget.url}}\"/>\r\n        </div>\r\n      </ng-container>\r\n      <div *ngSwitchCase=\"'HTML'\">\r\n        <div class=\"jj-widget\">\r\n          <div class=\"jj-toolbar\">\r\n            <button class=\"jj-button-cog\" (click)=\"editWidget(widget._id, widget.widgetType)\">\r\n              <span class=\"glyphicon glyphicon-cog\"></span>\r\n            </button>\r\n            <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n          </div>\r\n          <div [innerHTML]=\"widget.text\"></div>\r\n        </div>\r\n      </div>\r\n      <div *ngSwitchCase=\"'TEXT'\">\r\n        <div class=\"jj-widget\">\r\n          <div class=\"jj-toolbar\">\r\n            <button class=\"jj-button-cog\" (click)=\"editWidget(widget._id, widget.widgetType)\">\r\n              <span class=\"glyphicon glyphicon-cog\"></span>\r\n            </button>\r\n            <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n          </div>\r\n          <div *ngIf=\"widget.formatted\">\r\n            <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\r\n          </div>\r\n          <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\r\n                 placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\r\n\r\n          <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\r\n                    rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\r\n                    class=\"form-control\">{{widget.text}}</textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <button class=\"jj-button-cog\" (click)=\"goToProfile()\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </button>\r\n    </p>\r\n    <p class=\"navbar-text pull-left\">\r\n      <button class=\"jj-button-cog\" [routerLink]=\"\">\r\n        <span class=\"glyphicon glyphicon-play\"></span>\r\n      </button>\r\n      <button class=\"jj-button-cog\" [routerLink]=\"\">\r\n        <span class=\"glyphicon glyphicon-eye-open\"></span>\r\n      </button>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = (function () {
    function WidgetListComponent(widgetService, activatedRoute, router, sanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sanitizer = sanitizer;
        this.widgets = [];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.userId = params['uid'];
            _this.webId = params['wid'];
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetListComponent.prototype.goToProfile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WidgetListComponent.prototype.goToPages = function () {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page']);
    };
    WidgetListComponent.prototype.newWidget = function () {
        this.router.navigate(['user/', this.userId, 'website', this.webId, 'page', this.pageId, 'widget', 'new']);
    };
    WidgetListComponent.prototype.editWidget = function (wgid, type) {
        var _this = this;
        this.widgetService.findWidgetById(wgid)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetType = type;
            _this.router.navigate(['user/', _this.userId, 'website', _this.webId, 'page', _this.pageId, 'widget', wgid]);
        });
    };
    WidgetListComponent.prototype.cleanURL = function (url) {
        var youTubeURL = 'https://www.youtube.com/embed/';
        var end = url.split('/');
        youTubeURL += end[end.length - 1];
        return this.sanitizer.bypassSecurityTrustResourceUrl(youTubeURL);
    };
    WidgetListComponent.prototype.onIndexChange = function (event) {
        var _this = this;
        this.widgetService.sortingWidgets(this.pageId, event.start, event.stop)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(userService) {
        this.userService = userService;
    }
    AuthenticationService.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlickrService = (function () {
    function FlickrService(http) {
        this.http = http;
        this.api = {
            'searchPhotos': this.searchPhotos
        };
        this.key = '93716fb0cbfb4174f4207ce92dcebfe8';
        this.secret = '6a3e2889118cafa0';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this.http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var PageService = (function () {
    function PageService(http) {
        this.http = http;
        this.baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createPage': this.createPage,
            'findPageByWebsiteId': this.findPageByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.baseURL + '/api/website/' + websiteId + '/page';
        return this.http.post(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var url = this.baseURL + '/api/website/' + websiteId + '/page';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseURL + '/api/page/' + pageId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var url = this.baseURL + '/api/page/' + pageId;
        return this.http.put(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseURL + '/api/page/' + pageId;
        return this.http.delete(url);
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = {};
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(sharedService, router, http) {
        this.sharedService = sharedService;
        this.router = router;
        this.http = http;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
            'login': this.login,
            'register': this.register,
            'logout': this.logout,
            'loggedIn': this.loggedIn
        };
    }
    UserService.prototype.loggedIn = function () {
        var _this = this;
        var url = this.baseURL + '/api/loggedIn';
        this.options.withCredentials = true;
        return this.http.post(url, '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.logout = function () {
        var url = this.baseURL + '/api/logout';
        this.options.withCredentials = true;
        return this.http.post(url, '', this.options)
            .map(function (status) {
            return status;
        });
    };
    UserService.prototype.register = function (username, password, firstname, lastname, email) {
        var url = this.baseURL + '/api/register';
        var credentials = {
            username: username,
            password: password,
            firstName: firstname,
            lastName: lastname,
            email: email
        };
        // this.options.withCredentials = true;
        return this.http.post(url, credentials) // , this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        var url = this.baseURL + '/api/login';
        var credentials = {
            username: username,
            password: password,
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.createUser = function (user) {
        var url = this.baseURL + '/api/user';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseURL + '/api/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseURL + '/api/user?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseURL + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseURL + '/api/user/' + userId;
        return this.http.put(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseURL + '/api/user/' + userId;
        return this.http.delete(url);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WebsiteService = (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (developerId, website) {
        var url = this.baseURL + '/api/user/' + developerId + '/website';
        return this.http.post(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (developerId) {
        var url = this.baseURL + '/api/user/' + developerId + '/website';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = this.baseURL + '/api/website/' + websiteId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = this.baseURL + '/api/website/' + websiteId;
        return this.http.put(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.baseURL + '/api/website/' + websiteId;
        return this.http.delete(url);
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WidgetService = (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget,
            'sortingWidgets': this.sortingWidgets
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = this.baseURL + '/api/page/' + pageId + '/widget';
        return this.http.post(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = this.baseURL + '/api/page/' + pageId + '/widget';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseURL + '/api/widget/' + widgetId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseURL + '/api/widget/' + widgetId;
        return this.http.put(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseURL + '/api/widget/' + widgetId;
        return this.http.delete(url);
    };
    WidgetService.prototype.sortingWidgets = function (pageId, start, stop) {
        var url = this.baseURL + '/api/page/' + pageId + '/widget?initial=' + start + '&final=' + stop;
        return this.http.put(url, start)
            .map(function (response) {
            return response.json();
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3100'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map