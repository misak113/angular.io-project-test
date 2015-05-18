/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, For, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
	selector: 'my-app'
})
@View({
	template: `
	<h1>Hello {{ name }}</h1>
	<button (click)="random()"> RANDOM </button>
	<input type="text" #namemodel (keyup)="update(namemodel)">{{ namemodel.value }}
	<label *for="#name of names; #i = index">
		{{ name }}<input type="text" #myname value="{{ name }}" (keyup)="updateName(i, myname.value)">
		<br/>
		{{ namemodel.value }} <input type="text" #namemodel (keyup)="update(namemodel)">
	</label>
	`,
	directives: [For]
})
// Component controller
class MyAppComponent {
	name: string;
	names: string[];
	namemodel: any;

	constructor() {
		this.name = 'Alice';
		this.namemodel = { value: null };
		this.names = [];
		for (var i = 0;i < 1000;i++) {
			this.names.push('');
		}
	}

	update(namemodel: any) {console.log(this.namemodel, namemodel);
		this.name = namemodel.value;
	}

	updateName(i: number, namemodel: string) {console.log(namemodel);
		this.names[i] = namemodel;
	}

	random() {
		this.names.forEach((name: string, i: number) => {
			this.names[i] = Math.round(Math.random() * 10000) + '';
		});
		console.log(this.names);
	}
}

bootstrap(MyAppComponent);
