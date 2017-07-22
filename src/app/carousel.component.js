"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Cssproperty_1 = require("./Cssproperty");
var CarouselComponent = (function () {
    function CarouselComponent() {
        this.count = 1;
        this.pushTranslation = 100;
        this.propertyArray = [];
        this.activeIndex = 2;
        this.prevActiveIndex = 0;
        this.targetImg = '';
        this.AlternateImages = [
            {
                "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt01"
            },
            {
                "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt02"
            },
            {
                "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt03"
            },
            {
                "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt04"
            },
            {
                "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt05"
            },
            {
                "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt06"
            },
            {
                "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt07"
            }
        ];
    }
    CarouselComponent.prototype.ngOnInit = function () {
        this._setInitial();
    };
    CarouselComponent.prototype._setInitial = function () {
        this.numberOfImages = this.AlternateImages.length;
        this.translationXnum = '50px';
        this.redCol = 'red';
        this.setPropertyToCarousel(0, 0);
    };
    CarouselComponent.prototype.setPropertyToCarousel = function (param, factor) {
        if (param == 0) {
            for (var a = 0; a < this.numberOfImages; a++) {
                var propertyVar = new Cssproperty_1.CssProperty(String(0 + 'px'), this.AlternateImages[a].image);
                this.propertyArray.push(propertyVar);
            }
            this.propertyArray[this.count].setBorder('1px solid black');
            this.targetImg = this.propertyArray[this.count].imageSrc;
        }
        else {
            if (param == 1) {
                if (this.numberOfImages - this.count > 1) {
                    for (var a = 0; a < this.numberOfImages; a++) {
                        this.propertyArray[a].setLeft(String((parseInt(this.propertyArray[a].getLeft()) - factor) + 'px'));
                    }
                }
                this.propertyArray[this.count - 1].setBorder('');
                this.propertyArray[this.count].setBorder('1px solid black');
                this.targetImg = this.propertyArray[this.count].imageSrc;
            }
            else {
                if (this.numberOfImages - this.count > 2) {
                    for (var a = 0; a < this.numberOfImages; a++) {
                        this.propertyArray[a].setLeft(String((parseInt(this.propertyArray[a].getLeft()) + factor) + 'px'));
                    }
                }
                this.propertyArray[this.count + 1].setBorder('');
                this.propertyArray[this.count].setBorder('1px solid black');
                this.targetImg = this.propertyArray[this.count].imageSrc;
            }
        }
    };
    CarouselComponent.prototype.proceed = function () {
        if (this.count < this.numberOfImages) {
            this.count++;
            this.setPropertyToCarousel(1, 70);
        }
    };
    CarouselComponent.prototype.back = function () {
        if (this.count > 1) {
            this.count--;
            this.setPropertyToCarousel(2, 70);
        }
    };
    return CarouselComponent;
}());
CarouselComponent = __decorate([
    core_1.Component({
        selector: 'carousel',
        templateUrl: './carousel.component.html',
        styleUrls: ['./carousel.component.css']
    })
], CarouselComponent);
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel.component.js.map