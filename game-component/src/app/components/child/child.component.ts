import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../../service/search.service'
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  constructor(public SearchService: SearchService) { 
    console.log("构造函数执行")
  }

  @Input() list: string[]; //输入,list数据
  @Output() selNum = new EventEmitter(); //输出, 选中下标, 是一个事件
  current=null
  

  ngOnInit(): void {
  }

  setCurrent(i) {
    this.current = i;
    this.selNum.emit(i); //发送一个数据i
    
  }
  

}
