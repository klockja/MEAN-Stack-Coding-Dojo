import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cakes';
  newCake: { baker: string; image: string; description: string; };
  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.newCake = {baker: "", image: "", description: ""}
    this.getCakesFromService();
  }

  cakes: { baker: string, image: string, description: string }[] = [];

  getCakesFromService()
  {
    const observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("Got the cakes! " + data)
      this.cakes = data;
    })
  }

  selectedCake: any;
  cakeEventHandler(cake: any) {
    this.selectedCake = cake;
    console.log("Selected cake is " + cake);
  }

  onSubmit() {
    this._httpService.addCake({'baker':this.newCake['baker'], 'image':this.newCake['image'], 'description':this.newCake['description']})
    this.newCake = {baker: "", image: "", description: ""}
  }
}
