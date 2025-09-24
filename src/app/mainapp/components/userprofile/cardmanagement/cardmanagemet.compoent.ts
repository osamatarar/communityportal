import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { Toolbar } from "primeng/toolbar";
import { Button } from "primeng/button";
import { CoreTable, TableColumn } from "@/core/components/core.table/core.table";
import { DynamicFormComponent } from "@/core/components/core.form/dynamic-form.component";
import { ConfirmDialog } from "primeng/confirmdialog";
import { TableAction } from '@/core/models/dynamic-field.model';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'card-management',
  standalone: true,
  imports: [CommonModule, TabsModule, Toolbar, Button, CoreTable, DynamicFormComponent, ConfirmDialog],
  templateUrl: './cardmanagement.compoent.html',

})
export class CardManagementComponent {
     constructor(private confirmationService: ConfirmationService) {}
    selectedReferenceType :string ="Card Management";
    pathFormValue : any= null;

    Columns : TableColumn[] = 
    [
      { field: 'FullName', header: 'CardHolder', sortable: true, style: 'min-width:16rem' },
      { field: 'Email', header: 'Card', sortable: true, style: 'min-width:20rem' },
      { field: 'Mobile', header: 'Status', sortable: true, style: 'min-width:20rem' },
     { field: 'DepartmentName', header: 'Spent Amount', sortable: false, style: 'min-width:20rem', },
    ];
    
    FormConfig = {
    formName: "CardManagementForm",
    controls:   [
        {
          type: 'text' as const,
          name: 'CardHolderName',
          label: 'Full Name',
          placeholder: 'Enter FullName',
          validators: { required: true, minLength: 3 },
          group: 'name' 
        },
        {
          type: 'number' as const,
          name: 'CardNumber',
          label: 'Card Number',
          placeholder: 'Enter Card Number',
          validators: { required: true, minLength: 3 },
          group: 'name' 
        },
        {
          type: 'date' as const,
          name: 'DateOfExpiry',
          label: 'Date of Expiry',
          placeholder: 'Enter Date of Expiry',
          validators: { "required": true } ,
          requiredSymbol : true,
          group: 'secondrow',
          fullWidth: false   
        },
        {
          type: 'number' as const,
          name: 'Cvc',
          label: 'Cvc Number',
          placeholder: 'Enter Cvc Number',
          validators: { required: true },
          group: 'secondrow' ,
          fullWidth: false   
        },
        
      ]
    }

    Actions: TableAction[] = [
    { icon: 'pi pi-pencil', severity: 'info', action: 'Disable' },
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
