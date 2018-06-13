import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { SurveillanceComponent } from './surveillance/surveillance.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'This is my first project with angular 5';
}
