import { Component, inject, OnInit } from '@angular/core';
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
import { ActivatedRoute, Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { GenericHttpService } from '@/services/genericHttpSerivce';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  imports: [CommonModule, ButtonModule, DynamicFormComponent, ConfirmDialog, ToolbarModule, FormsModule ,CoreTable,CardModule, DividerModule],
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
    httpService: any = inject(GenericHttpService);
    constructor(private confirmationService: ConfirmationService,private route: ActivatedRoute) {}
    selectedReferenceType :string ="Campaigns";
    pathFormValue : any= null;

    Columns : TableColumn[] =
    [
      { field: 'Name', header: 'Compain Name', sortable: true, style: 'min-width:10rem' },
      { field: 'ProjectName', header: 'Project', sortable: true, style: 'min-width:16rem' },
      { field: 'InsertDate', header: 'Creation Date', sortable: true, style: 'min-width:16rem' },
      { field: 'StartDate', header: 'Start Date', sortable: false, style: 'min-width:16rem', },
      { field: 'EndDate', header: 'End Date', sortable: false, style: 'min-width:15rem', type:'date' },
      { field: 'DisableEnable', header: 'Disable/Enable', sortable: false, style: 'min-width:15rem', },
    ];

    FormConfig = {
    formName: "eventForm",
    controls:   [

        {
          type: 'text' as const,
          name: 'Name',
          label: 'Campaign Name',
          placeholder: 'Enter Campaign Name',
          validators: { required: true, minLength: 3 },
          group: 'first'
        },
        {
          type: 'date' as const,
          name: 'StartDate',
          label: 'Campaign Start Date',
          placeholder: 'Enter Campaign Start Date',
          validators: { "required": true } ,
          requiredSymbol : true,
          group: 'secondrow',
          fullWidth: false
        },
        {
          type: 'date' as const,
          name: 'EndDate',
          label: 'Campaign End Date',
          placeholder: 'Enter End Dat',
          validators: { required: true },
          group: 'secondrow' ,
          fullWidth: false
        },

      ]
    }

    Actions: TableAction[] = [
    { icon: 'pi pi-pencil', severity: 'info', action: 'edit' },
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
    project = {
    imageUrl: 'assets/images/your-image.jpg',   // replace with your own path
    group: 'Muslim, Sunni',
    code: '001',
    title: 'Project Title',
    startDate: 'Sep 15',
    endDate: 'Dec 27, 2025',
    location: 'New York, NY',
    description: `Come be part of an exciting community project! This is a fantastic
                  opportunity for us to connect, share ideas, and inspire one another.
                  Together, we have the power to create meaningful change.`,
    details: `Your participation can truly make a difference. We can't wait to see you
              there and collaborate on something great. Let’s unite our efforts and
              build a brighter future together. Join us and be a part of this amazing
              journey. Looking forward to your presence!`
  };
  projectID!:number;
  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
          this.projectID = params['id'];
          if (this.projectID) {

              this.fetchProjectDetails(this.projectID);
          }
      });
    }

      fetchProjectDetails(id: number) {
          this.httpService.getById('generic/CMCampaign',id).subscribe((data: any) => {
              if (data && data.length > 0) {
                  this.project = data[0];
              }
          });
        }
        onToggleChange(value: boolean) {
            console.log('Toggle changed:', value);
        }
}
