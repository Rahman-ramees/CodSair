import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home/home.component';
import { NavBarComponent } from './Components/NavComponent/nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },{
    path:"navBar",
    component:NavBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
