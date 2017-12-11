import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as mdls from "./models/models"


@Injectable()
export class CompetitionService {

  constructor(private http: HttpClient) {
    this.getCompetitions().subscribe(data => {
      console.log(data);
    });
  }

  public getCompetitions(): Observable<any> {
    return this.http.get("../assets/data/competitions.json")
  }

}
