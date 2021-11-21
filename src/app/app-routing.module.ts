import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ClassesComponent } from './classes/classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearningComponent } from './learning/learning.component';
import { LogoComponent } from './logo/logo.component';
import { LogoutComponent } from './logout/logout.component';
import { ResourcesComponent } from './resources/resources.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [

  {path:'logo', component:LogoComponent},
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'classes',
    component:ClassesComponent
  },
  {
    path:'resources',
    component:ResourcesComponent
  }, {
    path:'learning',
    component:LearningComponent
  }, {
    path:'chat',
    component:ChatComponent
  }, {
    path:'setting',
    component:SettingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
