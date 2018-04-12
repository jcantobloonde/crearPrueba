import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var PruebaComponent = /** @class */ (function () {
    function PruebaComponent() {
    }
    PruebaComponent.prototype.ngOnInit = function () {
    };
    return PruebaComponent;
}());
PruebaComponent.decorators = [
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [PruebaComponent],
                exports: [
                    PruebaComponent
                ]
            },] },
];

export { PruebaModule, PruebaComponent as ɵa };
//# sourceMappingURL=crear-prueba.js.map
