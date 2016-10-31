
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

// Decorator will tell it's actually a module and you have to import 
@NgModule({
//to render your module and ready for browser
   imports: [BrowserModule],
   declarations : [AppComponent],
   bootstrap: [AppComponent]

})
export class AppModule{

}