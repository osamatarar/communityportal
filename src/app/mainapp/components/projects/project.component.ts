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
import { Router } from '@angular/router';
import { CommunityBaseComponent } from '../basecomponent';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, ButtonModule, DynamicFormComponent, ConfirmDialog, ToolbarModule, FormsModule ,CoreTable],
  templateUrl: './project.component.html'

})

export class ProjectComponent extends CommunityBaseComponent {
    selectedReferenceType :string ="Projects List";
    pathFormValue : any= null;

    Columns : TableColumn[] =
    [
      { field: 'Code', header: 'Code', sortable: true, style: 'min-width:10rem' },
      { field: 'Title', header: 'Title', sortable: true, style: 'min-width:16rem' },
      { field: 'ComunityName', header: 'Community', sortable: true, style: 'min-width:16rem' },
      { field: 'Location', header: 'Location', sortable: false, style: 'min-width:16rem', },
      { field: 'StartDate', header: 'Start Date', sortable: false, style: 'min-width:15rem', type:'date' },
      { field: 'EndDate', header: 'End Date', sortable: false, style: 'min-width:15rem',type:'date'  },
      {  field: 'Status', header: 'Status', sortable: false, style: 'min-width:15rem', },
    ];

    FormConfig = {
    formName: "eventForm",
    controls:   [
        {
          type: 'text' as const,
          name: 'Code',
          label: 'Code',
          placeholder: 'Enter Code',
          validators: { required: true },
          value : "80",
          group: 'first'
        },
        {
          type: 'text' as const,
          name: 'Title',
          label: 'Project Title',
          placeholder: 'Enter Project Name',
          validators: { required: true, minLength: 3 },
          group: 'first'
        },
        {
          type: 'date' as const,
          name: 'StartDate',
          label: 'Project Start Date',
          placeholder: 'Enter Start Date',
          validators: { "required": true } ,
          requiredSymbol : true,
          group: 'secondrow',
          fullWidth: false
        },
        {
          type: 'date' as const,
          name: 'EndDate',
          label: 'Project End Date',
          placeholder: 'Enter End Dat',
          validators: { required: true },
          group: 'secondrow' ,
          fullWidth: false
        },
        {
          type: 'text' as const,
          name: 'Location',
          label: 'Project Location',
          placeholder: 'Enter Project Location',
          group: 'thirdrow' ,
          fullWidth: false
        },
        {
          type: 'select' as const,
          name: 'CommunityId',
          label: 'Main Community',
          placeholder: 'Select Community',
          url : "User/GetReferenceTypes?id=6",
          group: 'thirdrow' ,
          fullWidth: false
        },
        {
          type: 'select' as const,
          name: 'CommunityId',
          label: 'Sub Community',
          placeholder: 'Select SubComunity',
          url : "User/GetReferenceTypes?id=6",
          group: 'fourthrow' ,
          fullWidth: false
        },
        {
          type: 'file' as const,
          name: 'documentId',
          label: 'Project Picture',
          group: 'fourthrow' ,
          fullWidth: false
        },
        {
          type: 'textarea' as const,
          name: 'Description',
          label: 'Project Description',
          placeholder: 'Text  here....',
          group: 'fifthrow' ,
          fullWidth: true
        },

        {
          type: 'text' as const,
          name: 'AccountTypeId',
          label: 'Description',
          placeholder: 'Enter Description',
          hidden : true
        }

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
    }else if(event.action =='view')
    {
        this.router.navigate(
            ['/app/project-detail'],
            { queryParams: { id: event.row.ID } }
        );

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
