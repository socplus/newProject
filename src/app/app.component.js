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
var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.productInfo = [];
        this._obj = [];
        this.shortDescrpPromotion = [];
        this.features = [];
        this.review = {};
        this.totalReviews = '';
        this.showAddToCart = false;
        this.showPickUp = false;
        this.price = '';
        this.priceQualifier = '';
        this.index = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getProductData().subscribe(function (result) {
            _this.productInfo = result.CatalogEntryView[0];
            _this.gotoDetail(_this.productInfo.Promotions);
            _this.populateReview(_this.productInfo.CustomerReview);
            _this.setButtonVisibility(_this.productInfo.purchasingChannelCode, _this.productInfo.inventoryStatus);
            _this.price = _this.productInfo.Offers[0].OfferPrice[0].formattedPriceValue;
            _this.priceQualifier = _this.productInfo.Offers[0].OfferPrice[0].priceQualifier;
            _this.features = _this.productInfo.ItemDescription["0"].features;
        });
    };
    AppComponent.prototype.setButtonVisibility = function (channelCode, inventoryStatus) {
        if ((channelCode == "0" || channelCode == "1") && inventoryStatus == "Online") {
            this.showAddToCart = true;
        }
        if ((channelCode == "0" || channelCode == "2") && inventoryStatus == "instores") {
            this.showPickUp = true;
        }
    };
    AppComponent.prototype.getImgSrc = function (images) {
        var imgSrc;
        var temp = images[this.index];
        imgSrc = temp.PrimaryImage[this.index].image;
        return imgSrc;
    };
    AppComponent.prototype.populateReview = function (reviewObj) {
        var x = 0;
        var date = new Date(reviewObj[this.index].Con[this.index].datePosted);
        var condate = date.toDateString();
        this.review.con = {
            review: reviewObj[this.index].Con[this.index].review,
            title: reviewObj[this.index].Con[this.index].title,
            screenName: reviewObj[this.index].Con[this.index].screenName,
            date: condate
        };
        date = new Date(reviewObj[this.index].Pro[this.index].datePosted);
        var prodate = date.toDateString();
        this.review.pro = {
            review: reviewObj[this.index].Pro[this.index].review,
            title: reviewObj[this.index].Pro[this.index].title,
            screenName: reviewObj[this.index].Pro[this.index].screenName,
            date: prodate
        };
        this.totalReviews = reviewObj[this.index].totalReviews;
    };
    AppComponent.prototype.gotoDetail = function (Promotions) {
        var temp = [];
        var interMediate = {};
        var x = 0;
        for (var i = 0; i < Promotions.length; i++) {
            interMediate = Promotions[i];
            if (interMediate.Description) {
                temp.push(interMediate.Description[x].shortDescription);
            }
        }
        this.shortDescrpPromotion = temp;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "./app.component.html",
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [app_service_1.AppServices])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map