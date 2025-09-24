import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
    selector: 'app-mydiscussions',
    templateUrl: './mydiscussions.component.html',
    styleUrls: ['./mydiscussions.component.css'],
    standalone: true,
    imports: [ToolbarModule, CardModule, ButtonModule, TagModule, AvatarModule, AvatarGroupModule, InputTextModule, SelectModule]
})
export class MydiscussionsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
