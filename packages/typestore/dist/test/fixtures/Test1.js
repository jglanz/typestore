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
require('reflect-metadata');
var Log = require('../../log');
var Decorations_1 = require("../../Decorations");
var log = Log.create(__filename);
var Test1 = (function () {
    function Test1() {
        log.info("constructor for " + this.constructor.name);
    }
    __decorate([
        Decorations_1.AttributeDescriptor({ name: 'id', hashKey: true }), 
        __metadata('design:type', String)
    ], Test1.prototype, "id", void 0);
    __decorate([
        Decorations_1.AttributeDescriptor({ name: 'createdAt', rangeKey: true }), 
        __metadata('design:type', Number)
    ], Test1.prototype, "createdAt", void 0);
    __decorate([
        Decorations_1.AttributeDescriptor({
            name: 'randomText',
            index: {
                name: 'RandomTextIndex'
            }
        }), 
        __metadata('design:type', String)
    ], Test1.prototype, "randomText", void 0);
    Test1 = __decorate([
        Decorations_1.ModelDescriptor({ tableName: 'testTable1' }), 
        __metadata('design:paramtypes', [])
    ], Test1);
    return Test1;
}());
exports.Test1 = Test1;

//# sourceMappingURL=Test1.js.map