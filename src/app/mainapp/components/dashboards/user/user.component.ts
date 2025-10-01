import { Component, OnInit } from '@angular/core';
import { StatcardsComponent } from './statcards/statcards.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { RequestsComponent } from './requests/requests.component';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { EventsComponent } from './events/events.component';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    standalone: true,
    imports: [CommonModule, ToolbarModule, StatcardsComponent, CampaignsComponent, RequestsComponent, EventsComponent, ButtonModule]
})
export class UserComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
