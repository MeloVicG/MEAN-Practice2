import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http' //gives us get put delete post. to see use = this._http.

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient) {
    // console.log('ng on init? !?');
    // this.getTasks()
  }
  
  getTasks() {
    //----part 1-----
    // console.log('getting tasks!!?');
    
    // const tempObservable = this._http.get('/api/tasks')
    // tempObservable.subscribe(data => {
      //same
      //--part 2--
      // this._http.get('/api/tasks')
      //   .subscribe(data => {
        //     console.log('tasks: ', data)
        // })
        
    return this._http.get<{name:string,completed:boolean}[]>('/api/tasks')
  }

  updateTask(task, index) {
    return this._http.post('/api/tasks/' + index, task)
  }
      
}
