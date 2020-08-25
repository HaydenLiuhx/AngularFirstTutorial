import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //导入当前路由
import { Location } from '@angular/common' //导入路由切换方法

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent implements OnInit {
  id = null //路由id
  constructor(
    private route:ActivatedRoute, //注入当前路由
    public location:Location
  ) {}

  ngOnInit(): void {
    //获取当前路由
    this.route.params.subscribe(item=>{
      this.id = item.id
    })
  }

}
