import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SelectButtonModule } from 'primeng/selectbutton';
import { EditorModule } from 'primeng/editor';
@Component({
    selector: 'app-detailpage',
    templateUrl: './detailpage.component.html',
    styleUrls: ['./detailpage.component.css'],
    standalone: true,
    imports: [ToolbarModule, CardModule, ButtonModule, TagModule, AvatarModule, AvatarGroupModule, SelectButtonModule, EditorModule]
})
export class DetailpageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
