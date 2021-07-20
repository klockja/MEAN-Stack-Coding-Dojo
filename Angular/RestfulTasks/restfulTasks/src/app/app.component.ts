import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'restfulTasks';
  newTask: any;
	editTask: { title: string; description: string; };
	constructor(private _httpService: HttpService){}

	ngOnInit() {
		this.newTask = { title: "", description: "" }
		this.editTask = {title: "", description: ""}
	}

	tasks: Array<{title:string,description:string}> = [];

	getTasksFromService(){
		const observable = this._httpService.getTasks();
		observable.subscribe(data => {
			console.log("Got tasks!", data)
			this.tasks = data;
		});
	}

	onButtonClick(event) {
		this.getTasksFromService();
	}

	selectedTask: any;
	showTask(task) {
    if(task != this.selectedTask)
    {
		  this.selectedTask = task;
    }
    else
    {
      this.selectedTask = null;
    }
	}

	edit_task: String;
	editButton(task) {
    if(task != this.edit_task)
		  this.edit_task = task;
    else
      this.edit_task = null;
	}

	onEditSubmit() {
		this._httpService.updateTask({'title':this.edit_task['title'], 'description':this.edit_task['description'], 'completed':this.edit_task['completed']}, this.edit_task['_id'])
    this.edit_task = "";
    this.getTasksFromService();
	}

	delButton(task) {
		this._httpService.delTask(task['_id'])
    this.getTasksFromService();
	}

	onSubmit() {
		this._httpService.addTask({'title':this.newTask['title'], 'description':this.newTask['description']})
		this.newTask = { title: "", description: ""}
    this.getTasksFromService();
	}
}
