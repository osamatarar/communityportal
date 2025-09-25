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

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  imports: [CommonModule, ButtonModule, ConfirmDialog, ToolbarModule, FormsModule ,CoreTable],
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent extends CommunityBaseComponent {

    selectedReferenceType :string ="Hospital Requests";
    pathFormValue : any= null;

    Columns : TableColumn[] =
    [
      { field: 'Status', header: 'Status', sortable: true, style: 'min-width:10rem' },
      { field: 'HospitalName', header: 'HospitalName', sortable: true, style: 'min-width:16rem' },
      { field: 'Services', header: 'Services', sortable: true, style: 'min-width:16rem' },
      { field: 'POCName', header: 'P.O.C Name', sortable: false, style: 'min-width:16rem', },
      { field: 'FullAddress', header: 'Address', sortable: false, style: 'min-width:15rem', type:'date' }
    ];


    Actions: TableAction[] = [
    { icon: 'pi pi-pencil', severity: 'info', action: 'edit' },
    { icon: 'pi pi-trash', severity: 'danger', action: 'delete',  },
    { icon: 'pi pi-eye', severity: 'info', action: 'view',  },
  ];


  onActionTriggered(event: { action: string; row: any }) {
    if(event.action =='edit') {
         this.ShowDialog = !this.ShowDialog;
         event.row.StartDate = new Date(event.row.StartDate);
         event.row.EndDate = new Date(event.row.EndDate);
         this.pathFormValue = {...event.row,  ...this.pathFormValue};
    }
    else if(event.action =='delete')
    {
       this.confirmationService.confirm({
                message: 'Are you sure you want to delete',
                header: 'Confirm',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {


                }
            });
    }
  }




  ShowDialog : boolean =false;
  toggleDialog(event : boolean){
    this.ShowDialog = event;
  }
  addNew(){
    this.ShowDialog = !this.ShowDialog;
    this.pathFormValue = {};
    this.pathFormValue = {AccountType: 9};
  }

  onSelectionChange(data:any){
     this.selectedReferenceType = data.name;
  }

}
