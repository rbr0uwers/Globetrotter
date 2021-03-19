"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(name, city, zipCode, address, imgPath, date) {
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.imgPath = imgPath;
        this.date = date;
        this.id = ++Locations.instanceCounter;
    }
    Locations.prototype.getPropsToDisplayAsHTML = function () {
        return "\n                <p>" + this.city + "</p>\n                <p>" + this.zipCode + "</p>\n                <p>" + this.address + "</p>";
    };
    Locations.prototype.display = function () {
        return "\n        <div class=\"col\">\n            <div class=\"card\">\n                <img src=\"" + this.imgPath + "\" class=\"card-img-top rounded img-fluid\" alt=\"picture of " + this.name + "\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title fw-bolder\">" + this.name + "</h5>\n                    " + this.getPropsToDisplayAsHTML() + "\n                </div>\n                <div class=\"card-footer\">\n                    <p class=\"fs-4 text-end secondaryfont \">Created: " + this.date.toLocaleDateString() + " " + this.date.toLocaleTimeString() + "</small>\n                </div>\n            </div>\n        </div>\n        ";
    };
    Locations.instanceCounter = 0;
    return Locations;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, zipCode, address, imgPath, date, telNumber, cuisineType, url) {
        var _this = _super.call(this, name, city, zipCode, address, imgPath, date) || this;
        _this.telNumber = telNumber;
        _this.cuisineType = cuisineType;
        _this.url = url;
        return _this;
    }
    Restaurant.prototype.getPropsToDisplayAsHTML = function () {
        return _super.prototype.getPropsToDisplayAsHTML.call(this) + "\n                <p>" + this.telNumber + "</p>\n                <p>" + this.cuisineType + "</p>\n                <p>" + this.url + "</p>";
    };
    return Restaurant;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zipCode, address, imgPath, date, eventDate, price) {
        var _this = _super.call(this, name, city, zipCode, address, imgPath, date) || this;
        _this.eventDate = eventDate;
        _this.price = price;
        return _this;
    }
    Events.prototype.getPropsToDisplayAsHTML = function () {
        return _super.prototype.getPropsToDisplayAsHTML.call(this) + "\n                <p>" + this.eventDate.toLocaleDateString() + " " + this.eventDate.toLocaleTimeString() + "</p>\n                <p>" + this.price + "</p>";
    };
    return Events;
}(Locations));
