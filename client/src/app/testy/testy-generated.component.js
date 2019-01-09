var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
  This file is automatically generated. Any changes will be overwritten.
  Modify testy.component.ts instead.
*/
import { ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { LabelComponent } from '@radzen/angular/dist/label';
import { PickListComponent } from '@radzen/angular/dist/picklist';
import { ButtonComponent } from '@radzen/angular/dist/button';
var TestyGenerated = (function () {
    function TestyGenerated(injector) {
        this.injector = injector;
    }
    TestyGenerated.prototype.ngOnInit = function () {
        this.notificationService = this.injector.get(NotificationService);
        this.dialogService = this.injector.get(DialogService);
        this.dialogRef = this.injector.get(DialogRef, null);
        this.router = this.injector.get(Router);
        this.cd = this.injector.get(ChangeDetectorRef);
        this._location = this.injector.get(Location);
        this.route = this.injector.get(ActivatedRoute);
    };
    TestyGenerated.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._subscription = this.route.params.subscribe(function (parameters) {
            if (_this.dialogRef) {
                _this.parameters = _this.injector.get(DIALOG_PARAMETERS);
            }
            else {
                _this.parameters = parameters;
            }
            _this.cd.detectChanges();
        });
    };
    TestyGenerated.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    TestyGenerated.prototype.button0Click = function (event) {
        this.dialogRef.close(null);
    };
    TestyGenerated.prototype.button1Click = function (event) {
        this.dialogRef.close(null);
    };
    __decorate([
        ViewChild('content1'),
        __metadata("design:type", ContentComponent)
    ], TestyGenerated.prototype, "content1", void 0);
    __decorate([
        ViewChild('pageTitle'),
        __metadata("design:type", HeadingComponent)
    ], TestyGenerated.prototype, "pageTitle", void 0);
    __decorate([
        ViewChild('label0'),
        __metadata("design:type", LabelComponent)
    ], TestyGenerated.prototype, "label0", void 0);
    __decorate([
        ViewChild('label1'),
        __metadata("design:type", LabelComponent)
    ], TestyGenerated.prototype, "label1", void 0);
    __decorate([
        ViewChild('picklistSagsbehandler'),
        __metadata("design:type", PickListComponent)
    ], TestyGenerated.prototype, "picklistSagsbehandler", void 0);
    __decorate([
        ViewChild('button0'),
        __metadata("design:type", ButtonComponent)
    ], TestyGenerated.prototype, "button0", void 0);
    __decorate([
        ViewChild('button1'),
        __metadata("design:type", ButtonComponent)
    ], TestyGenerated.prototype, "button1", void 0);
    return TestyGenerated;
}());
export { TestyGenerated };
//# sourceMappingURL=D:/work/RadNoegletal/Noegletal/client/src/app/testy/testy-generated.component.js.map