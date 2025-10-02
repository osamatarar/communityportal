
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
  selector: 'app-venues',
  imports: [CommonModule, ButtonModule, DynamicFormComponent, ConfirmDialog, ToolbarModule, FormsModule ,CoreTable],

  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent extends CommunityBaseComponent  {


    selectedReferenceType :string ="Venues";
    pathFormValue : any= null;

    Columns : TableColumn[] =
    [
      { field: 'Code', header: 'Code', sortable: true, style: 'min-width:10rem' },
      { field: 'Title', header: 'Title', sortable: true, style: 'min-width:16rem' },
      { field: 'Community', header: 'Community', sortable: true, style: 'min-width:16rem' },
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
          name: 'Name',
          label: 'Venue Name',
          placeholder: 'Enter Venue Name',
          validators: { required: true, minLength: 3 },
          group: 'first'
        },
        {
          type: 'text' as const,
          name: 'Address',
          label: 'Address',
          placeholder: 'Enter Address',
          validators: { "required": true } ,
          requiredSymbol : true,
          group: 'first',
          fullWidth: false
        },
        {
          type: 'select' as const,
          name: 'GuestCountId',
          label: 'Guest Count',
          placeholder: 'Enter Guest Count',
          validators: { required: true },
          group: 'secondrow' ,
          url : "User/GetReferenceTypes?id=13",
          fullWidth: false
        },
        {
          type: 'select' as const,
          name: 'AgeRangeId',
          label: 'Age Range',
          placeholder: 'Enter Age Range',
          group: 'secondrow' ,
          url : "User/GetReferenceTypes?id=14",
          fullWidth: false
        },
        {
          type: 'textarea' as const,
          name: 'Description',
          label: 'Description',
          placeholder: 'Description',
          group: 'fourthrow' ,
          fullWidth: true
        },
        {
          type: 'file' as const,
          name: 'documentId',
          label: 'Project Picture',
          group: 'fifthrow' ,
          fullWidth: true
        },

        {
          type: 'text' as const,
          name: 'MultiMedia',
          label: 'Multi Media',
          placeholder: 'Enter MultiMedia',
          group: 'sixthrow' ,
          fullWidth: false
        },
        {
          type: 'text' as const,
          name: 'MusicSystem',
          label: 'Music System',
          placeholder: 'Enter MusicSystem',
           group: 'sixthrow' ,
           fullWidth: false
        },
        {
          type: 'text' as const,
          name: 'HiTea',
          label: 'HiTea',
          placeholder: 'Enter HiTea',
           group: 'seventhrow' ,
           fullWidth: false
        },
        {
          type: 'text' as const,
          name: 'Dinner',
          label: 'Dinner',
          placeholder: 'Enter Dinner',
           group: 'seventhrow' ,
           fullWidth: false
        },
        {
          type: 'text' as const,
          name: 'Chairs',
          label: 'Chairs',
          placeholder: 'Enter Chairs',
          group: 'eighthrow' ,
           fullWidth: false
        },
        {
          type: 'text' as const,
          name: 'Lunch',
          label: 'Lunch',
          placeholder: 'Enter Lunch',
           group: 'eighthrow' ,
           fullWidth: false
        },
        {
          type: 'text' as const,
          name: 'Sofa',
          label: 'Sofa',
          placeholder: 'Enter Sofa',
           group: 'ninthrow' ,
           fullWidth: false
        },
        {
          type: 'text' as const,
          name: 'Tables',
          label: 'Tables',
          placeholder: 'Enter Tables',
           group: 'ninthrow' ,
           fullWidth: false
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
    this.pathFormValue = {Code: this.getRandomNDigits(4)};
  }

  onSelectionChange(data:any){
     this.selectedReferenceType = data.name;
  }


}
