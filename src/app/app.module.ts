import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { MainComponent } from './Dashboards/main/main.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { S3boardComponent } from './Dashboards/services/s3board/s3board.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule],
  declarations: [ AppComponent,
    CardComponent,
   MainComponent,
       S3boardComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
