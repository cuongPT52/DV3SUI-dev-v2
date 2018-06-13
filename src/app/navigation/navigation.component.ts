import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { OnEventCompomentComponent } from '../on-event-component/on-event-component.component';
import { SurveillanceComponent } from '../surveillance/surveillance.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  count: number = 10;

   updateFromChild($event){
    this.count = $event;
    console.log("data update", this.count);
  }
  constructor(private _event: ElementRef) {  }

  ngOnInit() {
  }

  
}
