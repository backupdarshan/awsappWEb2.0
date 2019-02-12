import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MainComponent } from './Dashboards/main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}