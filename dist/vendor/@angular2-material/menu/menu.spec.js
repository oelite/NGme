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
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var menu_1 = require('./menu');
testing_1.describe('MdMenu', function () {
    var builder;
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
        builder = tcb;
    }));
    testing_1.it('should add and remove focus class on focus/blur', function () {
        var template = "";
        return builder.overrideTemplate(TestList, template)
            .createAsync(TestList).then(function (fixture) {
            testing_1.expect(true).toBe(true);
        });
    });
});
var TestList = (function () {
    function TestList() {
    }
    TestList = __decorate([
        core_1.Component({
            selector: 'test-menu',
            template: "",
            directives: [menu_1.MD_MENU_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], TestList);
    return TestList;
}());
//# sourceMappingURL=menu.spec.js.map