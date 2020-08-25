import { Component } from '@angular/core';
import {SearchService} from './service/search.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  constructor(public SearchService:SearchService){

  }
  //list = ["jquery", "vue", "react", "angular"];
  title = 'This is Hayden';
  msg= '好好学习-天天<em>向上</em>';
  url = "http://static.runoob.com/images/runoob-logo.png"
  //public flag:boolean = false;
  flag = false;
  showMsg = (e) => console.log(this.msg,"事件",e)
  myClass="active"
  mystyle={
    'color':"pink",
    'font-size':'48px'
  }
  current = null
  setCurrent = (e, i) => this.current = i
  sel=false
  hobby="A1"
  myDate = new Date()
  obj={name:"mumu",age:18,arr:[1,2,3]}
  list=["羽毛球","篮球","足球","乒乓球","跑步"," - "];

  setType(i) {
    if(i==null){
      this.selectType="全部"
    } else {
      this.selectType = this.list[i];
    }
  }
  selectType="全部"
  area = ["黄浦区","长宁区","静安区","普陀区","虹口区","徐汇区","杨浦区"]
  selectArea="全部"
  //test = (e) => console.log(e)
}
