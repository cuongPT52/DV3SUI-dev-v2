import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service'

@Component({
  selector: 'app-on-event-compoment',
  templateUrl: './on-event-compoment.component.html',
  styleUrls: ['./on-event-compoment.component.css']
})
export class OnEventCompomentComponent implements OnInit {

	message: string;

	constructor(private _data: DataService) { 
		//this.message = this._data.getName();
		this._data.currentNameSubject.subscribe((val) => {
			this.message = val;
		    //console.log("subject behaver",val);
		})
	}

	ngOnInit() {
		//this.message = this.data.getName();
	}

}
