import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreDropdownComponent } from '@/core/components/core.dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { FormsModule } from "@angular/forms";
import { CoreTable, TableColumn } from '@/core/components/core.table/core.table';
import { ButtonModule } from 'primeng/button';
import { DynamicFormComponent } from '@/core/components/core.form/dynamic-form.component';
import { TableAction } from '@/core/models/dynamic-field.model';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { FluidClasses } from 'primeng/fluid';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  imports: [CommonModule, ButtonModule, DynamicFormComponent, ConfirmDialog, ToolbarModule, FormsModule ,CoreTable],

  styleUrls: ['./forums.component.css']
})
export class ForumsComponent {
    constructor(private confirmationService: ConfirmationService) {}
    selectedReferenceType :string ="All Forums";
    pathFormValue : any= null;

    Columns : TableColumn[] =
    [
      { field: 'StatusDate', header: 'Status Date', sortable: true, style: 'min-width:10rem' },
      { field: 'Date', header: 'Date', sortable: true, style: 'min-width:16rem' },
      { field: 'Title', header: 'Title', sortable: true, style: 'min-width:16rem' },
      { field: 'AgeLimit', header: 'Age Limit', sortable: false, style: 'min-width:16rem', },
      { field: 'Gender', header: 'Gender', sortable: false, style: 'min-width:15rem', type:'date' },
    ];

    FormConfig = {
    formName: "forumForm",
    controls:   [
        {
          type: 'text' as const,
          name: 'ForumTitle',
          label: 'Forum Title',
          placeholder: 'Enter Forum Title',
          validators: { required: true, minLength: 3 },
          fullwidth: true,
        },
        {
          type: 'date' as const,
          name: 'StartDate',
          label: 'Start Date',
          placeholder: 'Enter Start Date',
          validators: { "required": true } ,
          requiredSymbol : true,
          group: 'secondrow',
          fullWidth: false
        },
        {
          type: 'date' as const,
          name: 'EndDate',
          label: 'End Date',
          placeholder: 'Enter End Dat',
          validators: { required: true },
          group: 'secondrow' ,
          fullWidth: false
        },
          {
          type: 'number' as const,
          name: 'StartAge',
          label: 'Start Age',
          placeholder: 'Enter Start Age',
          validators: { required: true },
          group: 'thirdrow' ,
          fullWidth: false
        },

      ]
    }

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
