import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'app-campaigns',
    templateUrl: './campaigns.component.html',
    styleUrls: ['./campaigns.component.css'],
    standalone: true,
    imports: [CommonModule, TagModule, ProgressBarModule, ButtonModule]
})
export class CampaignsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
