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
var forms_1 = require("@angular/forms");
var forbidden_string_validator_1 = require("../../shared/validation/forbidden-string.validator");
var bug_service_1 = require("../service/bug.service");
var bug_1 = require("../model/bug");
var constants_1 = require("../../shared/constant/constants");
var BugDetailComponent = (function () {
    function BugDetailComponent(formBuilder, bugService) {
        this.formBuilder = formBuilder;
        this.bugService = bugService;
        this.forbiddenStrings = /(shit |fuck |cunt )/;
        this.modalId = "bugModal";
        this.statuses = constants_1.STATUS;
        this.severities = constants_1.SEVERITY;
        this.statusArr = [];
        this.severityArr = [];
        this.currentBug = null;
        this.cleanBug();
    }
    BugDetailComponent.prototype.ngOnInit = function () {
        this.statusArr = Object.keys(this.statuses).filter(Number);
        this.severityArr = Object.keys(this.severities).filter(Number);
        this.configureForm();
    };
    BugDetailComponent.prototype.configureForm = function (bug) {
        if (bug) {
            this.currentBug = new bug_1.Bug(bug.id, bug.title, bug.status, bug.severity, bug.description, bug.createdBy, bug.createdDate, bug.updatedBy, bug.updatedDate);
        }
        this.bugForm = this.formBuilder.group({
            title: [this.currentBug.title, [forms_1.Validators.required, forbidden_string_validator_1.forbiddenStringValidator(this.forbiddenStrings)]],
            status: [this.currentBug.status, forms_1.Validators.required],
            severity: [this.currentBug.severity, forms_1.Validators.required],
            description: [this.currentBug.description, [forms_1.Validators.required, forbidden_string_validator_1.forbiddenStringValidator(this.forbiddenStrings)]],
        });
    };
    BugDetailComponent.prototype.submitForm = function () {
        this.currentBug.title = this.bugForm.value['title'];
        this.currentBug.status = this.bugForm.value['status'];
        this.currentBug.severity = this.bugForm.value['severity'];
        this.currentBug.description = this.bugForm.value['description'];
        if (this.currentBug.id == null) {
            this.bugService.addBug(this.currentBug);
        }
        else {
            this.bugService.updateBug(this.currentBug);
        }
        jQuery('#' + this.modalId).modal('hide');
        this.clearForm();
    };
    BugDetailComponent.prototype.clearForm = function () {
        this.bugForm.reset({ title: null, status: this.statuses.Logged, severity: this.severities.Medium, description: null });
        this.cleanBug();
    };
    BugDetailComponent.prototype.cleanBug = function () {
        this.currentBug = new bug_1.Bug(null, // id
        null, // title
        this.statuses.Logged, // status
        this.severities.Medium, // severity
        null, // description
        null, // createdBy
        null, // createdDate
        null // updateBy
        );
    };
    return BugDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", bug_1.Bug)
], BugDetailComponent.prototype, "currentBug", void 0);
BugDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bug-detail',
        templateUrl: 'bug-detail.component.html',
        styleUrls: ['bug-detail.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, bug_service_1.BugService])
], BugDetailComponent);
exports.BugDetailComponent = BugDetailComponent;
//# sourceMappingURL=bug-detail.component.js.map