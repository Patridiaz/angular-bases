import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];

  private apiKey: string ='2BQGQvm3hji04nhih5CHlI9itVkaQreP'


  constructor ( private http : HttpClient) { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory( tag: string) {
    tag = tag.toLowerCase();

    if ( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
    }

    this._tagsHistory.unshift (tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
  }


searchTag( tag: string ):void {
    if ( tag.length == 0 ) return;
    this.organizeHistory(tag);

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=2BQGQvm3hji04nhih5CHlI9itVkaQreP&q=valorant&limite=10')
      .subscribe( resp => {

        console.log(resp);
      }  )

  }

  //   fetch('https://api.giphy.com/v1/gifs/search?api_key=2BQGQvm3hji04nhih5CHlI9itVkaQreP&q=valorant&limite=10')
  //     .then( resp => resp.json() )
  //     .then( data => console.log(data))

  // }
}
