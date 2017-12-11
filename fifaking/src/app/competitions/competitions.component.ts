import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import * as mdls from "../models/models";
import { CompetitionService } from '../competition.service';

@Component({
  selector: 'fk-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  displayedColumns = ['created_at', 'home_user.name','home_score','away_score', 'away_user.name' ];
  dataSource;

  constructor(private _compSvc:CompetitionService) { 
    let matches  = this._compSvc.getCompetitions().subscribe(data => {
      this.dataSource = new MatTableDataSource<mdls.Competition>(data);
    });
    
  }

  ngOnInit() {
  }

}
