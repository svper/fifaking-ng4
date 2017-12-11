import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import * as mdls from "../models/models";
import { MatchService } from '../match.service';
@Component({
  selector: 'fk-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  displayedColumns = ['created_at', 'home_user.name','home_score','away_score', 'away_user.name' ];
  dataSource;

  constructor(private _matchSvc:MatchService) { 
    let matches  = this._matchSvc.getMatchesJSON().subscribe(data => {
      this.dataSource = new MatTableDataSource<mdls.Match>(data);
    });
    
  }

  ngOnInit() {
  }

}