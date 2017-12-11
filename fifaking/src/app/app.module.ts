import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {FlexLayoutModule} from "@angular/flex-layout";

import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { MatchListComponent } from './match-list/match-list.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { UserComponent } from './user/user.component';

//services
import { MatchService } from './match.service';
import { CompetitionService } from './competition.service';

const appRoutes: Routes = [
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'user/:id',      component: UserComponent },
  { path: '',
    redirectTo: '/competitions',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MatchListComponent,
    CompetitionsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
