import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list.component';
import { ProjectListAltComponent } from './project-list-alt.component';
import { ModalComponent } from './modal.component';
import { ProjectService } from './project.service';
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [
    { path: 'projects', component: ProjectListComponent },
    { path: 'projects-alt', component: ProjectListAltComponent },
    { path: '', redirectTo: '/projects', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectListAltComponent,
    ModalComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  entryComponents: [ModalComponent],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
