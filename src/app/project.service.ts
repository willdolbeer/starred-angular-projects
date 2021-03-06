import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    
    // Get projects with angular in the name and order by number of stars
    private projectsUrl = 'https://api.github.com/search/repositories?q=angular+in:name&sort=stars&order=desc';

    constructor(private http: Http) { }

    getProjects() {
        return this.http.get(this.projectsUrl);
    }
}
