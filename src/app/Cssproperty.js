"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CssProperty = (function () {
    function CssProperty(left, imageSrc) {
        this.left = left;
        this.imageSrc = imageSrc;
    }
    CssProperty.prototype.setLeft = function (left) {
        this.left = left;
    };
    CssProperty.prototype.setImageSrc = function (imageSrc) {
        this.imageSrc = imageSrc;
    };
    CssProperty.prototype.getLeft = function () {
        return this.left;
    };
    CssProperty.prototype.getImageSrc = function () {
        return this.imageSrc;
    };
    CssProperty.prototype.setBorder = function (border) {
        this.border = border;
    };
    CssProperty.prototype.getBorder = function () {
        return this.border;
    };
    return CssProperty;
}());
exports.CssProperty = CssProperty;
//# sourceMappingURL=Cssproperty.js.map