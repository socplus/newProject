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
var app_service_1 = require("./app.service");
var StarRatingComponent = (function () {
    function StarRatingComponent(appService) {
        this.appService = appService;
        this.arrayForRating = [];
        this.arrayForNoRating = [];
        this.resultObj = {};
    }
    StarRatingComponent.prototype.ngOnInit = function () {
        this.getStarRating();
    };
    StarRatingComponent.prototype.fetchConFromJson = function (resultObj) {
        this.inputRating = resultObj.CatalogEntryView[0].CustomerReview[0].Con[0].overallRating;
        for (var i = 0; i < this.inputRating; i++) {
            this.arrayForRating.push(i);
        }
        this.arrayForNonRating = 5 - this.inputRating;
        for (var i = 0; i < this.arrayForNonRating; i++) {
            this.arrayForNoRating.push(i);
        }
    };
    StarRatingComponent.prototype.fetchProFromJson = function (resultObj) {
        this.inputRating = resultObj.CatalogEntryView[0].CustomerReview[0].Pro[0].overallRating;
        for (var i = 0; i < this.inputRating; i++) {
            this.arrayForRating.push(i);
        }
        this.arrayForNonRating = 5 - this.inputRating;
        for (var i = 0; i < this.arrayForNonRating; i++) {
            this.arrayForNoRating.push(i);
        }
    };
    StarRatingComponent.prototype.fetchOverall = function (resultObj) {
        this.inputRating = 0;
        this.inputRating = resultObj.CatalogEntryView[0].CustomerReview[0].consolidatedOverallRating;
        for (var i = 0; i < this.inputRating; i++) {
            this.arrayForRating.push(i);
        }
        this.arrayForNonRating = 5 - this.inputRating;
        for (var i = 0; i < this.arrayForNonRating; i++) {
            this.arrayForNoRating.push(i);
        }
    };
    StarRatingComponent.prototype.getStarRating = function () {
        var _this = this;
        this.appService.getProductData().subscribe(function (result) {
            if (_this.name == "overall") {
                _this.fetchOverall(result);
            }
            else {
                if (_this.name == "pro") {
                    _this.fetchProFromJson(result);
                }
                else {
                    _this.fetchConFromJson(result);
                }
            }
        });
    };
    return StarRatingComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StarRatingComponent.prototype, "name", void 0);
StarRatingComponent = __decorate([
    core_1.Component({
        selector: 'star-rating',
        templateUrl: './rating.component.html',
        styleUrls: ['./rating.component.css']
    }),
    __metadata("design:paramtypes", [app_service_1.AppServices])
], StarRatingComponent);
exports.StarRatingComponent = StarRatingComponent;
//# sourceMappingURL=starrating.component.js.map