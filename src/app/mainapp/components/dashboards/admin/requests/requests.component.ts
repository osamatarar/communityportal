import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.css'],
    standalone: true,
    imports: [CommonModule, TagModule, ProgressBarModule, ButtonModule]
})
export class RequestsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
