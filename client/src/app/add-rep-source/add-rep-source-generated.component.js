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
  Modify add-rep-source.component.ts instead.
*/
import { ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { FormComponent } from '@radzen/angular/dist/form';
var AddRepSourceGenerated = (function () {
    function AddRepSourceGenerated(injector) {
        this.injector = injector;
    }
    AddRepSourceGenerated.prototype.ngOnInit = function () {
        this.notificationService = this.injector.get(NotificationService);
        this.dialogService = this.injector.get(DialogService);
        this.dialogRef = this.injector.get(DialogRef, null);
        this.router = this.injector.get(Router);
        this.cd = this.injector.get(ChangeDetectorRef);
        this._location = this.injector.get(Location);
        this.route = this.injector.get(ActivatedRoute);
    };
    AddRepSourceGenerated.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._subscription = this.route.params.subscribe(function (parameters) {
            if (_this.dialogRef) {
                _this.parameters = _this.injector.get(DIALOG_PARAMETERS);
            }
            else {
                _this.parameters = parameters;
            }
            _this.load();
            _this.cd.detectChanges();
        });
    };
    AddRepSourceGenerated.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    AddRepSourceGenerated.prototype.load = function () {
    };
    AddRepSourceGenerated.prototype.form0Cancel = function (event) {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
        else {
            this._location.back();
        }
    };
    __decorate([
        ViewChild('content1'),
        __metadata("design:type", ContentComponent)
    ], AddRepSourceGenerated.prototype, "content1", void 0);
    __decorate([
        ViewChild('form0'),
        __metadata("design:type", FormComponent)
    ], AddRepSourceGenerated.prototype, "form0", void 0);
    return AddRepSourceGenerated;
}());
export { AddRepSourceGenerated };
//# sourceMappingURL=D:/work/RadNoegletal/Noegletal/client/src/app/add-rep-source/add-rep-source-generated.component.js.map