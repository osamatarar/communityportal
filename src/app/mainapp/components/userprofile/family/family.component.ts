import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { ToolbarModule } from 'primeng/toolbar';
import { TableAction } from '@/core/models/dynamic-field.model';
import { ConfirmationService } from 'primeng/api';
import { CoreTable, TableColumn } from '@/core/components/core.table/core.table';
import { ButtonModule } from 'primeng/button';
import { DynamicFormComponent } from '@/core/components/core.form/dynamic-form.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'user-family',
  standalone: true,
  imports: [CommonModule, ButtonModule, ConfirmDialogModule, CoreTable,DynamicFormComponent, ToolbarModule, TabsModule],
  templateUrl: './family.component.html',

})
export class UserFamilyComponent { 

    constructor(private confirmationService: ConfirmationService) {}
    selectedReferenceType :string ="Family Members";
    pathFormValue : any= null;

    Columns : TableColumn[] = 
    [
    { field: 'FullName', header: 'Full Name', sortable: true, style: 'min-width:16rem' },
    { field: 'Email', header: 'Email', sortable: true, style: 'min-width:20rem' },
    { field: 'Mobile', header: 'Mobile', sortable: true, style: 'min-width:20rem' },
    { field: 'DepartmentName', header: 'Department Name', sortable: false, style: 'min-width:20rem', },
    ];
    
    FormConfig = {
    formName: "familyMemberForm",
    controls:   [
        {
          type: 'text' as const,
          name: 'FullName',
          label: 'Full Name',
          placeholder: 'Enter FullName',
          validators: { required: true, minLength: 3 },
          group: 'name' 
        },
        {
          type: 'text' as const,
          name: 'Email',
          label: 'Email Address',
          placeholder: 'Enter Email Address',
          validators: { required: true, minLength: 3 },
          group: 'name' 
        },
        {
          type: 'date' as const,
          name: 'DateOfBirth',
          label: 'Date of Birth',
          placeholder: 'Enter Date of Birth',
          validators: { "required": true } ,
          requiredSymbol : true,
          group: 'secondrow',
          fullWidth: false   
        },
        {
          type: 'text' as const,
          name: 'IdentityNumber',
          label: 'Identity Number',
          placeholder: 'Enter Identity Number',
          validators: { required: true },
          group: 'secondrow' ,
          fullWidth: false   
        },
        {
          type: 'select' as const,
          name: 'RelationId',
          label: 'Relation',
          placeholder: 'Select Relation',
          url : "User/GetReferenceTypes?id=6",
          group: 'thirdrow',
          fullWidth: false   
        },
        {
          type: 'select' as const,
          name: 'BloodTypeId',
          label: 'Blood Type',
          placeholder: 'Select Blood Type',
          url : "User/GetReferenceTypes?id=6",
          group: 'thirdrow',
          fullWidth: false   
        },
        {
          type: 'select' as const,
          name: 'MaritalStatusId',
          label: 'Martial Status',
          placeholder: 'Select Blood Type',
          url : "User/GetReferenceTypes?id=6",
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
         this.pathFormValue= {AccountType: 9};
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
