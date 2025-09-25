import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from "@angular/forms";
import { CoreTable, TableColumn } from '@/core/components/core.table/core.table';
import { DynamicFormComponent } from '@/core/components/core.form/dynamic-form.component';
import { TableAction } from '@/core/models/dynamic-field.model';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Router } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

@Component({
    selector: 'app-DetailPage',
    templateUrl: './DetailPage.component.html',
    styleUrls: ['./DetailPage.component.css'],
    standalone: true,
    imports: [ToolbarModule, CardModule, ButtonModule, ButtonModule, DynamicFormComponent, ConfirmDialog, ToolbarModule, FormsModule, CoreTable, CarouselModule]
})
export class DetailPageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
