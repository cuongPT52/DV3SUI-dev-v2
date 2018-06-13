import { Component, OnInit, Directive, Input, Output, EventEmitter} from '@angular/core';
import {CustomDirectiveDirective} from '../custom-directive.directive';
import {DataService} from '../service/data.service'
import {ElementRef} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-surveillance',
  template: `<input [(ngModel)]="firstName" [ngModelOptions]="{updateOn: 'blur'}">
  			<button (click) ="clickFn()" >{{title}}</button>
  			<div *ngFor="let item of cameraList; let i = index">{{i}} -- {{item}}</div>`
})

export class SurveillanceComponent {
	textTitile: string;
	@Input() // get pass data from parent
		title: number;

	@Output() // push data to parent
 		change = new EventEmitter<number>();

	cameraName: string;
	cameraList : any[] = ['camera1', 'camera2', "camera3", 'camera4'];

	constructor(private _data: DataService) {
		

	}

	clickFn() {
		this._data.setName(this.textTitile);
		this.title ++;
		this.change.emit(this.title);
	}

}