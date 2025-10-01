import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StatcardsComponent } from './statcards/statcards.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { RequestsComponent } from './requests/requests.component';
import { KhumsComponent } from './khums/khums.component';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
    standalone: true,
    imports: [CommonModule, ToolbarModule, StatcardsComponent, CampaignsComponent, RequestsComponent, KhumsComponent, ButtonModule]
})
export class AdminComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
