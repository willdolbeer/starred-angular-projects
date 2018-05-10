import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
    @Input() project;

    constructor(public projectModal: NgbActiveModal) {}
    
}