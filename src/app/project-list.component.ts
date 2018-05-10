import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from './modal.component';
import { ProjectService } from './project.service';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
    projects: any;
    field = 'name';
    search: string;

    constructor(
        private projectService: ProjectService,
        private modalService: NgbModal
    ) {}
    
    getProjects() {
        this.projectService.getProjects()
            .subscribe((res: any) => {
                this.projects = res.json().items;
                // Change search parameter to trigger filter after list is loaded, otherwise will list not display
                this.search = '';
            });
    }
    
    showDetail(project: any) {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.project = project;
    }

    ngOnInit() {
        this.getProjects();
    }

}
