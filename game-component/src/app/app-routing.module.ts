import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import {BooklistComponent} from './pages/booklist/booklist.component'
import {RaceComponent} from './pages/race/race.component'
import {StadiumComponent} from './pages/stadium/stadium.component'

const routes: Routes = [
  {path: "home",component: HomeComponent},
  {path: "booklist",component: BooklistComponent},
  {path: "race",component:RaceComponent},
  {path: "stadium/:id",component: StadiumComponent},
  {path: "",redirectTo:"/home",pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
