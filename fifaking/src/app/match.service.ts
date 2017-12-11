import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as mdls from "./models/models"


@Injectable()
export class MatchService {

  constructor(private http: HttpClient) {
    this.getMatchesJSON().subscribe(data => {
      console.log(data);
    });
  }

  public getMatchesJSON(): Observable<any> {
    return this.http.get("../assets/data/matches.json")
  }
}
