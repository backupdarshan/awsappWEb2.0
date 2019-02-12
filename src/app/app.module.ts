import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { MainComponent } from './Dashboards/main/main.component';
import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
    CardComponent,
   MainComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
