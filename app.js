if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
// Annotation section
var MyAppComponent = (function () {
    function MyAppComponent() {
        this.name = 'Alice';
        this.namemodel = { value: null };
        this.names = [];
        for (var i = 0; i < 1000; i++) {
            this.names.push('');
        }
    }
    MyAppComponent.prototype.update = function (namemodel) {
        console.log(this.namemodel, namemodel);
        this.name = namemodel.value;
    };
    MyAppComponent.prototype.updateName = function (i, namemodel) {
        console.log(namemodel);
        this.names[i] = namemodel;
    };
    MyAppComponent.prototype.random = function () {
        var _this = this;
        this.names.forEach(function (name, i) {
            _this.names[i] = Math.round(Math.random() * 10000) + '';
        });
        console.log(this.names);
    };
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: "\n\t<h1>Hello {{ name }}</h1>\n\t<button (click)=\"random()\"> RANDOM </button>\n\t<input type=\"text\" #namemodel (keyup)=\"update(namemodel)\">{{ namemodel.value }}\n\t<label *for=\"#name of names; #i = index\">\n\t\t{{ name }}<input type=\"text\" #myname value=\"{{ name }}\" (keyup)=\"updateName(i, myname.value)\">\n\t\t<br/>\n\t\t{{ namemodel.value }} <input type=\"text\" #namemodel (keyup)=\"update(namemodel)\">\n\t</label>\n\t",
            directives: [angular2_1.For]
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
