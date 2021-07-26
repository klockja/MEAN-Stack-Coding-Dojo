import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {
  editAuthor: any;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) {}

  author_context: any;
	ngOnInit() {
		this._route.params.subscribe((params) => {
			this.author_context = params["id"];
			this.getAuthor(this.author_context);
		});
	}

	getAuthor(id) {
		const observable = this._httpService.showAuthor(id);
		observable.subscribe((data) => {
			console.log("Got our author!", data);
			this.editAuthor = data;
		});
	}

	onEditSubmit() {
		this._httpService.editAuthor(this.editAuthor).subscribe((data) => {
			console.log(data);
			this._router.navigate(["/"]);
		});
		this.editAuthor = { name: "" };
	}
}
