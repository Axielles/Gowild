var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var EventBoardComponent = /** @class */ (function () {
    function EventBoardComponent() {
        this.isCollapsed = true;
    }
    EventBoardComponent.prototype.onClick = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    EventBoardComponent.prototype.onReClick = function () {
        // this.isCollapsed = !this.isCollapsed;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EventBoardComponent.prototype, "event", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], EventBoardComponent.prototype, "index", void 0);
    EventBoardComponent = __decorate([
        Component({
            selector: 'app-event-board',
            templateUrl: './event-board.component.html',
            styleUrls: ['./event-board.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], EventBoardComponent);
    return EventBoardComponent;
}());
export { EventBoardComponent };
//# sourceMappingURL=event-board.component.js.map