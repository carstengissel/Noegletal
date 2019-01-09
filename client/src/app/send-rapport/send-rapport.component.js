var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injector } from '@angular/core';
import { SendRapportGenerated } from './send-rapport-generated.component';
var SendRapportComponent = (function (_super) {
    __extends(SendRapportComponent, _super);
    function SendRapportComponent(injector) {
        return _super.call(this, injector) || this;
    }
    SendRapportComponent.prototype.load = function () {
        _super.prototype.load.call(this);
    };
    SendRapportComponent = __decorate([
        Component({
            selector: 'page-send-rapport',
            templateUrl: './send-rapport.component.html'
        }),
        __metadata("design:paramtypes", [Injector])
    ], SendRapportComponent);
    return SendRapportComponent;
}(SendRapportGenerated));
export { SendRapportComponent };
//# sourceMappingURL=D:/work/RadNoegletal/Noegletal/client/src/app/send-rapport/send-rapport.component.js.map