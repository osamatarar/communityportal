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
import {FieldConfig} from '../../../core/models/dynamic-field.model'

@Component({
  selector: 'dropdown-data',
  standalone: true,
  imports: [CommonModule, ButtonModule, DynamicFormComponent, ConfirmDialog, CoreDropdownComponent, ToolbarModule, FormsModule ,CoreTable],
  templateUrl: './dropdowndata.component.html'
  
})
export class DropdownDataComponent {
    constructor(private confirmationService: ConfirmationService) {}
  
    selectValue :any =0;
    selectedReferenceType :string ="";
    pathFormValue : any= null;

    Columns : TableColumn[] = 
    [
      { field: 'Name', header: 'Name', sortable: true, style: 'min-width:16rem' ,  },
      { field: 'Description', header: 'Description', sortable: false, style: 'min-width:20rem' },
    ];
    
    FormConfig = {
    formName: "userForm",
    controls:    [
        {
          type: 'text' as const,
          name: 'Name',
          label: 'Name',
          placeholder: 'Enter Name',
          validators: { required: true, minLength: 1 },
          group: 'name' ,
          requiredSymbol : true
        },
        {
          type: 'textarea' as const,
          name: 'Description',
          label: 'Description',
          placeholder: 'Enter Description',
          validators: { required: false },
          fullWidth: true   
        },
        {
          type: 'text' as const,
          name: 'ReferenceId',
          label: 'Description',
          placeholder: 'Enter Description',
          hidden : true 
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
         this.pathFormValue= {ReferenceId: +this.selectValue};
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
    this.pathFormValue = {ReferenceId: +this.selectValue};
  }

  onSelectionChange(data:any){
     this.selectedReferenceType = data.name;
  }

}
