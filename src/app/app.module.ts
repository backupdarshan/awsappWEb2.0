import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { MainComponent } from './Dashboards/main/main.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { S3boardComponent } from './Dashboards/services/s3board/s3board.component';
import { IamboardComponent } from './Dashboards/services/iamboard/iamboard.component';
import { Ec2boardComponent } from './Dashboards/services/ec2board/ec2board.component';
import { CloudwatchboardComponent } from './Dashboards/services/cloudwatchboard/cloudwatchboard.component';
import { RdsboardComponent } from './Dashboards/services/rdsboard/rdsboard.component';

import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule],
  declarations: [ AppComponent,
    CardComponent,
    ButtonComponent,
   MainComponent,
       S3boardComponent,
       IamboardComponent,
    Ec2boardComponent,
    CloudwatchboardComponent,
    RdsboardComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
