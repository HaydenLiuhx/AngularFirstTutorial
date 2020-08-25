import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  name:string ="mumu";
  //定义数据名称
  constructor() { }

  public getName():string {
    return this.name;
  }
  public setName(v):void {
    this.name = v
  }
}
