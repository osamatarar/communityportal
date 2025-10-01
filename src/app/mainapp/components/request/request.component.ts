import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableAction } from '@/core/models/dynamic-field.model';
import { FormsModule } from '@angular/forms';
import { CoreTable, TableColumn } from '@/core/components/core.table/core.table';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NewComponent } from './new/new.component';


@Component({
    selector: 'app-request',
    templateUrl: './request.component.html',
    styleUrls: ['./request.component.css'],
    standalone: true,
    imports: [ToolbarModule, CardModule, ButtonModule, ButtonModule, ConfirmDialog, ToolbarModule, FormsModule, CoreTable, NewComponent],
    providers: [DialogService]
})
export class RequestComponent {
    ref: DynamicDialogRef | undefined;
    constructor(
        private confirmationService: ConfirmationService,
        private router: Router,
        public dialogService: DialogService
    ) {}
    selectedReferenceType: string = 'Requests';
    pathFormValue: any = null;

    FormConfig = {
        formName: 'requestForm',
        controls: [
            {
                type: 'text' as const,
                name: 'Requester',
                label: 'Requester',
                placeholder: 'Enter Code',
                validators: { required: true },
                value: '80',
                group: 'first'
            }
        ]
    };

    Columns: TableColumn[] = [
        { field: 'Requester', header: 'Requester', sortable: true, style: 'min-width:10rem' },
        { field: 'Subject', header: 'Subject', sortable: true, style: 'min-width:16rem' },
        { field: 'Nature of Assistance', header: 'Nature of Assistance', sortable: true, style: 'min-width:16rem' },
        { field: 'Urgency', header: 'Urgency', sortable: false, style: 'min-width:16rem' },
        { field: 'Status', header: 'Status', sortable: false, style: 'min-width:15rem' }
    ];

    Actions: TableAction[] = [
        { icon: 'pi pi-pencil', severity: 'info', action: 'edit' },
        { icon: 'pi pi-trash', severity: 'danger', action: 'delete' },
        { icon: 'pi pi-eye', severity: 'info', action: 'view' }
    ];

    onActionTriggered(event: { action: string; row: any }) {
        if (event.action == 'edit') {
            this.ShowDialog = !this.ShowDialog;
            event.row.StartDate = new Date(event.row.StartDate);
            event.row.EndDate = new Date(event.row.EndDate);
            this.pathFormValue = { ...event.row, ...this.pathFormValue };
        } else if (event.action == 'delete') {
            this.confirmationService.confirm({
                message: 'Are you sure you want to delete',
                header: 'Confirm',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {}
            });
        } else if (event.action == 'view') {
            this.router.navigate(['/app/request-detail'], { queryParams: { id: event.row.ID } });
        }
    }

    ShowDialog: boolean = false;
    toggleDialog(event: boolean) {
        this.ShowDialog = event;
    }
    addNew() {
        this.ref = this.dialogService.open(NewComponent, {
            header: 'New Request',
            width: '90vw',
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
            contentStyle: {
                overflow: 'auto',
                'max-height': '80vh'
            },
            baseZIndex: 10000,
            closable: true,
            modal: true
        });
    }

    onSelectionChange(data: any) {
        this.selectedReferenceType = data.name;
    }
}
