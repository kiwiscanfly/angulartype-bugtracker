"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("firebase");
require('firebase/auth');
require('firebase/database');
var constants_1 = require("../constant/constants");
var FirebaseConfigService = (function () {
    function FirebaseConfigService() {
        this.configureApp();
        this.configureDatabase();
    }
    Object.defineProperty(FirebaseConfigService.prototype, "database", {
        get: function () {
            return this._database;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseConfigService.prototype.configureApp = function () {
        this._fb_app = firebase.initializeApp(constants_1.FIREBASE_CONFIG);
    };
    FirebaseConfigService.prototype.configureDatabase = function () {
        this._database = this._fb_app.database();
    };
    return FirebaseConfigService;
}());
FirebaseConfigService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], FirebaseConfigService);
exports.FirebaseConfigService = FirebaseConfigService;
//# sourceMappingURL=firebase-config.service.js.map