import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SurveillanceComponent } from './surveillance/surveillance.component';
import {CustomDirectiveDirective} from './custom-directive.directive';
import { OnEventCompomentComponent } from './on-event-compoment/on-event-compoment.component';
import {DataService} from './service/data.service';
import { CustomDirective } from './directive/custom.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SurveillanceComponent,
    CustomDirectiveDirective,
    OnEventCompomentComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
