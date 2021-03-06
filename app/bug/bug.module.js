"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var shared_module_1 = require("../shared/shared.module");
var bug_routing_module_1 = require("./bug-routing-module");
var forms_1 = require("@angular/forms");
// Component
var bug_list_component_1 = require("./bug-list/bug-list.component");
var bug_detail_component_1 = require("./bug-detail/bug-detail.component");
// Services
var bug_service_1 = require("./service/bug.service");
var BugModule = (function () {
    function BugModule() {
    }
    return BugModule;
}());
BugModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            platform_browser_1.BrowserModule,
            bug_routing_module_1.BugRoutingModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            bug_list_component_1.BugListComponent,
            bug_detail_component_1.BugDetailComponent
        ],
        exports: [],
        providers: [
            bug_service_1.BugService
        ]
    })
], BugModule);
exports.BugModule = BugModule;
//# sourceMappingURL=bug.module.js.map