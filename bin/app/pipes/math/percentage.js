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
var core_1 = require('@angular/core');
var PercentagePipe = (function () {
    function PercentagePipe() {
    }
    PercentagePipe.prototype.transform = function (num, total, floor) {
        if (total === void 0) { total = 100; }
        if (floor === void 0) { floor = false; }
        if (isNaN(num)) {
            return num;
        }
        var percent = num * 100 / total;
        return floor ? Math.floor(percent) : percent;
    };
    PercentagePipe = __decorate([
        core_1.Injectable(),
        core_1.Pipe({ name: 'percentage' }), 
        __metadata('design:paramtypes', [])
    ], PercentagePipe);
    return PercentagePipe;
}());
exports.PercentagePipe = PercentagePipe;

//# sourceMappingURL=percentage.js.map
