import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getTasks(){
    return this._http.get<{title:string, description:string}[]>('/tasks');
  }

  addTask(newTask) {
    console.log(newTask);
    return this._http.post<any>('/tasks', newTask).subscribe(data => {
      console.log(data)
    })
  }

  updateTask(updateTask, task_id) {
    return this._http.put<any>(`/tasks/${task_id}`, updateTask).subscribe(data => {
      console.log(data)
    })
  }

  delTask(task_id) {
    return this._http.delete(`/tasks/${task_id}`).subscribe(data => {
      console.log(data)
    })
  }
}
