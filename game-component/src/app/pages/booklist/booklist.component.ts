import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
//定义一个场馆列表
list=[]
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.http.get("http://localhost:4000/api/users")
    .subscribe((res:any)=>{
      console.log(res.data.dataList)
      this.list = res.data.dataList
    })
  }

}
