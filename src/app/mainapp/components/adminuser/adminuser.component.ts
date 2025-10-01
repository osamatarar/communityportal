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
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'admin-user',
  standalone: true,
  imports: [CommonModule, SelectButtonModule, ButtonModule, DynamicFormComponent, ConfirmDialog, ToolbarModule, FormsModule ,CoreTable],
  templateUrl: './adminuser.component.html'
  
})

export class AdminUserComponent extends CommunityBaseComponent {
   
    selectedAccountType: string = '9';
    selectedReferenceType :string ="Users";
    pathFormValue : any= null;

    Columns : TableColumn[] = 
    [
      { field: 'FullName', header: 'Full Name', sortable: true, style: 'min-width:16rem' },
      { field: 'Email', header: 'Email', sortable: true, style: 'min-width:20rem' },
      { field: 'Mobile', header: 'Mobile', sortable: true, style: 'min-width:20rem' },
      { field: 'DepartmentName', header: 'Department Name', sortable: false, 
        style:  'min-width:20rem' 
       },
    ];
    
    FormConfig = {
    formName: "userForm",
    controls:   [
        {
          type: 'text' as const,
          name: 'FullName',
          label: 'First Name',
          placeholder: 'Enter FullName',
          validators: { required: true, minLength: 3 },
          group: 'name' 
        },
        {
          type: 'text' as const,
          name: 'LastName',
          label: 'Last Name',
          placeholder: 'Enter LastName',
          validators: { required: true, minLength: 3 },
          group: 'name' 
        },
        {
          type: 'email' as const,
          name: 'Email',
          label: 'Email(UserName)',
          placeholder: 'Enter Email',
          validators: { "required": true, "email": true } ,
          requiredSymbol : true,
          group: 'secondrow',
          fullWidth: false   
        },
        {
          type: 'text' as const,
          name: 'Mobile',
          label: 'Mobile',
          placeholder: 'Enter Mobile',
          validators: { required: true, minLength: 3 },
          group: 'secondrow' ,
          fullWidth: false   
        },
        {
          type: 'select' as const,
          name: 'DepartmentId',
          label: 'Department',
          placeholder: 'Enter Department Name',
          url : "User/GetReferenceTypes?id=6",
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
    { icon: 'pi pi-trash', severity: 'danger', action: 'delete',  }
    
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

    stateOptions: any[] = [
        { label: 'Internal', value: '9' },
        { label: 'Community', value: '26' }
    ];
    onAccountTypeChange(event: any) {
      const deptCol = this.Columns.find(c => c.field === 'DepartmentName');
      if (deptCol) {
        deptCol.style = this.selectedAccountType === '26' 
          ? 'min-width:20rem; display:none' 
          : 'min-width:20rem';
      }
      this.Columns = [...this.Columns];
    }


}
