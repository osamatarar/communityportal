import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { CommunityBaseComponent } from '../basecomponent';
import { Toolbar } from "primeng/toolbar";
import { CoreTable, TableColumn } from "@/core/components/core.table/core.table";
import { DynamicFormComponent } from "@/core/components/core.form/dynamic-form.component";
import { ConfirmDialog } from "primeng/confirmdialog";
import { TableAction } from '@/core/models/dynamic-field.model';
import { PickListModule } from "primeng/picklist";
import { Dialog } from "primeng/dialog";
import { picklistComponent } from "@/core/components/core.Picklist/picklist.component";

@Component({
  selector: 'role',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule, Toolbar, CoreTable, DynamicFormComponent, ConfirmDialog, PickListModule, picklistComponent],
  templateUrl: './role.component.html'
  
})

export class RoleComponent extends CommunityBaseComponent {
    
        selectedReferenceType :string ="Role";
        pathFormValue : any= null;
        picklistid:any=null;
        Columns : TableColumn[] = 
        [
          { field: 'RoleName', header: 'Role Name', sortable: true, style: 'min-width:16rem' },
          { field: 'RoleDescription', header: 'Role Description', sortable: true, style: 'min-width:16rem' },
        ];
        
        FormConfig = {
        formName: "roleForm",
        controls:   [
            {
              type: 'text' as const,
              name: 'RoleName',
              label: 'Role Name',
              placeholder: 'Enter Role',
              validators: { required: true, minLength: 3 },
              group: 'name' ,
              fullWidth: true   
            },
            {
              type: 'textarea' as const,
              name: 'RoleDescription',
              label: 'Role Description',
              placeholder: 'Enter Role Description',
              validators: { required: true, minLength: 3 },
              group: 'name' ,
              fullWidth: true   
            },

            
          ]
        }
    
        Actions: TableAction[] = [
        { icon: 'pi pi-pencil', severity: 'info', action: 'edit' },
        { icon: 'pi pi-trash', severity: 'danger', action: 'delete'},
        { icon: 'pi pi-sitemap', severity: 'info', action: 'assignRole' }
        
      ];
    
    
      onActionTriggered(event: { action: string; row: any }) {
        if(event.action =='edit') {
             this.ShowDialog = !this.ShowDialog;
             this.pathFormValue= {AccountType: 9};
             this.pathFormValue = {...event.row,  ...this.pathFormValue};
        }
        else if(event.action =='assignRole') {
            this.ShowAssignRoleDialog = !this.ShowAssignRoleDialog;
            this.picklistid=event.row.ID;
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
      ShowAssignRoleDialog:boolean=false;
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