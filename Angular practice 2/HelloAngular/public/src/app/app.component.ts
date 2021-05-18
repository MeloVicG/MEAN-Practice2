import { Component } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'This is AppComonent, Hello Angular';
  tasks: Array<{name:string, completed: boolean}> = []

  constructor(private _HttpService: HttpService){}

  ngOnInit(){
    // this.tasks=[] //same as line 12
    this._HttpService.getTasks()
    .subscribe(data => {
      console.log('tasks: ', data)
      this.tasks = data
      console.log("this.tasks==", this.tasks[0].name)
    })
  }

  dodishes(){
    this.tasks[0].completed = false;
    this._HttpService.updateTask()
  }

}
