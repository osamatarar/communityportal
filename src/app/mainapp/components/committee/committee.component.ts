import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreDropdownComponent } from '@/core/components/core.dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { FormsModule } from "@angular/forms";
import { CoreTable, TableColumn } from '@/core/components/core.table/core.table';
import { ButtonModule } from 'primeng/button';
import { DynamicFormComponent } from '@/core/components/core.form/dynamic-form.component';
import { TableAction } from '@/core/models/dynamic-field.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { GenericHttpService } from '@/services/genericHttpSerivce';
import { CommunityBaseComponent } from '../basecomponent';

@Component({
  selector: 'committee-config',
  standalone: true,
  imports: [CommonModule, DialogModule, SelectModule, ButtonModule, CoreDropdownComponent, ConfirmDialog, ToolbarModule, FormsModule ,CoreTable],
  templateUrl: './committe.component.html'
  
})

export class CommitteeComponent extends CommunityBaseComponent {
 
    httpService: any = inject(GenericHttpService);
    messageService :any = inject(MessageService)
    selectedReferenceType :string ="Committee Configuration";
    pathFormValue : any= null;
    ShowDialog :boolean = false;
    CommitteeId : number =0;


    Columns : TableColumn[] = 
    [
      { field: 'Name', header: 'Name', sortable: true, style: 'min-width:16rem' },
      { field: 'Description', header: 'Description', sortable: false, style: 'min-width:30rem' },
    ];
    
   Actions: TableAction[] = [
    { icon: 'pi pi-sitemap', severity: 'info', action: 'addmembers' }];


    MemberColumns : TableColumn[] = 
    [
      { field: 'ApprovalSequence', header: 'Approval Sequence', sortable: true, style: 'min-width:8rem' },
      { field: 'FullName', header: 'Approval Name', sortable: false, style: 'min-width:25rem' },
    ];

    MemberActions: TableAction[] = [
    { icon: 'pi pi-pencil', severity: 'info', action: 'edit' },
    { icon: 'pi pi-trash', severity: 'danger', action: 'delete',  }]


  onActionTriggered(event: { action: string; row: any }) {
    if(event.action =='addmembers') {
       this.ShowDialog =!this.ShowDialog;
       this.CommitteeId = event.row.Id;
    }
   else if(event.action =='edit') {
       this.showDialogAdd =!this.showDialogAdd;
       this.selectValue = + event.row.Id;
    }
  }

  addMember() {
   this.showDialogAdd = true;
  }
  
  showDialogAdd: boolean = false;
    selectValue: number =0;

    saveMember() {
    if (this.selectValue) {
        this.httpService.post('generic/exec/AddCommitteeMember',  {
            "CommitteeId": this.CommitteeId,
            "UserId": this.selectValue
        })
        .subscribe((data:any) => {
          (data.IsSuccess)
          {
           this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Memeber Added Successfully' });
           this.RefreshData = new Date(Date.now()).toString();
          }

    });
    this.showDialogAdd = false;
}
}
  

}
