import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MainComponent } from './Dashboards/main/main.component';
import { S3boardComponent } from './Dashboards/services/s3board/s3board.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'S3board', component: S3boardComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}