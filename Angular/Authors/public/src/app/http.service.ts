import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAuthors() {
    return this._http.get<{ name: string }[]>("/authors");
  }

  newAuthor(author)
  {
    return this._http.post<any>("/authors", author);
  }

  editAuthor(data) {
    return this._http.put<any>(`/authors/${data._id}`, data);
  }

  showAuthor(author_id)
  {
    return this._http.get<any>(`/authors/${author_id}`);
  }

  deleteAuthor(author_id) {
		return this._http.delete<any>(`/authors/${author_id}`);
	}

  newQuote(quote, author_id)
  {
    console.log("New Quote: " + quote);
    return this._http.post<any>(`/authors/write/${author_id}`, quote);
  }

  deleteQuote(quote, author_id)
  {
    return this._http.delete<any>(`/authors/write/${author_id}/${quote}`);
  }

  vote(quote, author_id, increment)
  {
    return this._http.put<any>(`/authors/write/${author_id}/${increment}/`, quote)
  }
}
