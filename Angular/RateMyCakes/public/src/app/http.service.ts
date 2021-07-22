import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { }
  getCakes(){
    return this._http.get<{baker:string, image:string, description:string}[]>('/cakes');
  }

  addCake(cakeData){
    return this._http.post<any>('/cakes', cakeData).subscribe(data =>
      {
        console.log(data)
      })
  }

  addRating(id, reviewData) {
    return this._http.post<any>(`/cakes/${id}`, reviewData).subscribe(data => {
      console.log(data)
    })
  }
}
