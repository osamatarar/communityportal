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
    selector: 'app-alldiscussions',
    templateUrl: './alldiscussions.component.html',
    styleUrls: ['./alldiscussions.component.css'],
    standalone: true,
    imports: [ToolbarModule, CardModule, ButtonModule, TagModule, AvatarModule, AvatarGroupModule, InputTextModule, SelectModule],
})
export class AlldiscussionsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
