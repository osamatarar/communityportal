import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreDropdownComponent } from '@/core/components/core.dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { FormsModule } from "@angular/forms";
import { CoreTable, TableColumn } from '@/core/components/core.table/core.table';
import { ButtonModule } from 'primeng/button';
import { TableAction } from '@/core/models/dynamic-field.model';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { CommunityBaseComponent } from '../basecomponent';
import { SelectButtonModule } from 'primeng/selectbutton';
import { NewComponent } from './new/new.component';
import { DialogModule } from 'primeng/dialog';


@Component({
    selector: 'app-lawajam',
    templateUrl: './lawajam.component.html',
    styleUrls: ['./lawajam.component.css'],
    standalone: true,
    imports: [CommonModule, NewComponent, SelectButtonModule, ButtonModule, ConfirmDialog, ToolbarModule, FormsModule, CoreTable,DialogModule]
})
export class LawajamComponent extends CommunityBaseComponent {
    selectedReferenceType: string = 'Lawajams';
    pathFormValue: any = null;

    userId: number = 0;

    Columns: TableColumn[] = [
        { field: 'Name', header: 'Name', sortable: true, style: 'min-width:16rem' },
        { field: 'MPrice', header: 'Monthly Price', sortable: true, style: 'min-width:20rem' },
        { field: 'YPrice', header: 'Yearly Price', sortable: true, style: 'min-width:20rem' },
        { field: 'PurchaseCount', header: 'Purchase Count', sortable: false, style: 'min-width:20rem' }
    ];

    Actions: TableAction[] = [
        { icon: 'pi pi-pencil', severity: 'info', action: 'edit' },
        { icon: 'pi pi-trash', severity: 'danger', action: 'delete' }
    ];

    onActionTriggered(event: { action: string; row: any }) {
        if (event.action == 'edit') {
            this.ShowDialog = !this.ShowDialog;
            this.pathFormValue = { AccountType: 9 };
            this.pathFormValue = { ...event.row, ...this.pathFormValue };
        } else if (event.action == 'delete') {
            this.confirmationService.confirm({
                message: 'Are you sure you want to delete',
                header: 'Confirm',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {}
            });
        }
    }

    ShowDialog: boolean = false;
    toggleDialog(event: boolean) {
        this.ShowDialog = event;
    }
    addNew() {
        this.ShowDialog = !this.ShowDialog;
        this.pathFormValue = {};
        this.pathFormValue = { AccountType: 9 };
    }
}
