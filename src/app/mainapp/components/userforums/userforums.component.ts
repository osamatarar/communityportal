import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AlldiscussionsComponent } from './alldiscussions/alldiscussions.component';
import { InvitesComponent } from './invites/invites.component';
import { MydiscussionsComponent } from './mydiscussions/mydiscussions.component';
@Component({
    selector: 'app-userforums',
    templateUrl: './userforums.component.html',
    styleUrls: ['./userforums.component.css'],
    standalone: true,
    imports: [CommonModule, TabsModule, AvatarModule, AvatarGroupModule,
        AlldiscussionsComponent,
        InvitesComponent,
        MydiscussionsComponent
    ],
})
export class UserforumsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
