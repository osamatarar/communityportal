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
import { CommunityBaseComponent } from '../basecomponent';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, ButtonModule, DynamicFormComponent, ConfirmDialog, ToolbarModule, FormsModule ,CoreTable],
  templateUrl: './event.component.html'

})

export class EventComponent extends CommunityBaseComponent {
  
    selectedReferenceType :string ="Event List";
    pathFormValue : any= null;

    Columns : TableColumn[] =
    [

      { field: 'StartDate', header: 'Creation Date', sortable: false, style: 'min-width:16rem', },
      { field: 'CreatedBy', header: 'Created By', sortable: false, style: 'min-width:15rem', type:'date' },
      { field: 'Name', header: 'Event Name', sortable: true, style: 'min-width:16rem' },
      { field: 'Location', header: 'Event Location', sortable: true, style: 'min-width:16rem' },
      {  field: 'Gender', header: 'Gender', sortable: false, style: 'min-width:15rem', },
    ];

    FormConfig = {
    formName: "eventForm",
    controls:   [
        {
          type: 'text' as const,
          name: 'Code',
          label: 'Event Id',
          placeholder: 'Enter FullName',
          validators: { required: true, minLength: 3 },
          value : "0002",
          readonly : false,
          group: 'first'
        },
        {
          type: 'text' as const,
          name: 'Title',
          label: 'Event Name',
          placeholder: 'Enter Title',
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
          label: 'Event Location',
          placeholder: 'Enter Project Location',
          group: 'thirdrow' ,
          fullWidth: false
        },
        {
          type: 'file' as const,
          name: 'documentId',
          label: 'Event Logo/Picture',
          group: 'thirdrow' ,
          fullWidth: false
        },
        {
          type: 'text' as const,
          name: 'MinParticipantsRequired',
          label: 'Min. Participants Required',
          placeholder: 'Min. Participants Required',
          group: 'fourthrow' ,
          fullWidth: false
        },
        {
          type: 'text' as const,
          name: 'MaxParticipants',
          label: 'Max. Participants',
          placeholder: 'Max. Participants',
          group: 'fourthrow' ,
          fullWidth: false
        },
        {
          type: 'checkbox' as const,
          name: 'Gender',
          label: 'Gender',
          placeholder: 'Gender',
          url : "User/GetReferenceTypes?id=3",
          group: 'fifthrow' ,
          fullWidth: false
        },
        {
          type: 'number' as const,
          name: 'MinAgeLimit',
          label: 'Age Limit Min',
          placeholder: 'Age Limit Min',
          group: 'sixthrow' ,
          fullWidth: false
        },
        {
          type: 'number' as const,
          name: 'MaxAgeLimit',
          label: 'Age Limit Max',
          placeholder: 'Limit Max',
          group: 'sixthrow' ,
          hidden : false
        },
         {
          type: 'text' as const,
          name: 'DraftEmail',
          label: 'Draft Email',
          placeholder: 'Draft Email',
          group: 'seventhrow' ,
          hidden : false
        },
        {
          type: 'text' as const,
          name: 'DraftSMS',
          label: 'Draft SMS',
          placeholder: 'Draft SMS',
          group: 'seventhrow' ,
          hidden : false
        },
        {
          type: 'textarea' as const,
          name: 'SpecialInstructions',
          label: 'Special Instructions For Participants',
          placeholder: 'SpecialInstructions',
          group: 'eighthrow' ,
          hidden : false
        }
      ]
    }

    Actions: TableAction[] = [
    { icon: 'pi pi-pencil', severity: 'info', action: 'edit' },
    { icon: 'pi pi-trash', severity: 'danger', action: 'delete',  },
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
