(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('crear-prueba', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['crear-prueba'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var PruebaComponent = /** @class */ (function () {
    function PruebaComponent() {
    }
    PruebaComponent.prototype.ngOnInit = function () {
    };
    return PruebaComponent;
}());
PruebaComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-prueba',
                template: "<h1>\n  <ng-content></ng-content>\n</h1>\n",
                styles: ["h1{color:#00f}"]
            },] },
];
PruebaComponent.ctorParameters = function () { return []; };
var PruebaModule = /** @class */ (function () {
    function PruebaModule() {
    }
    return PruebaModule;
}());
PruebaModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [PruebaComponent],
                exports: [
                    PruebaComponent
                ]
            },] },
];

exports.PruebaModule = PruebaModule;
exports.ɵa = PruebaComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=crear-prueba.umd.js.map
