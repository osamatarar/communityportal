import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
    selector: 'app-invites',
    templateUrl: './invites.component.html',
    styleUrls: ['./invites.component.css'],
    standalone: true,
    imports: [ToolbarModule, CardModule, ButtonModule, TagModule, AvatarModule, AvatarGroupModule, InputTextModule, SelectModule]
})
export class InvitesComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
