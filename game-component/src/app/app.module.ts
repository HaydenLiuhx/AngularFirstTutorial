import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//表单模块
import {FormsModule} from '@angular/forms';
//http模块
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { HomeComponent } from './pages/home/home.component';
import { BooklistComponent } from './pages/booklist/booklist.component';
import { RaceComponent } from './pages/race/race.component';
import { StadiumComponent } from './pages/stadium/stadium.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HomeComponent,
    BooklistComponent,
    RaceComponent,
    StadiumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
