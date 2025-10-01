import { ChangeDetectorRef, Component, EventEmitter, inject, Input, OnChanges, Output } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { PickList } from 'primeng/picklist';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GenericHttpService } from '@/services/genericHttpSerivce';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';

@Component({
    selector: 'picklist',
    templateUrl: './picklist.component.html',
    standalone: true,
    imports: [ToastModule, PickList, FormsModule, CommonModule, Button, Dialog]
})
export class picklistComponent implements OnChanges {
    httpService: any = inject(GenericHttpService);
    @Input() HeaderName: string = '';
    @Input() url: string = '';
    @Input() saveurl: string = '';
    @Output() onSave = new EventEmitter<any[]>();
    @Input() SPParams: Record<string, any> = {};
    @Input() ShowDialog: boolean = false;
    @Output() toggleDialog = new EventEmitter<boolean>();
   
    source: any[] = [];
    target: any[] = [];
   
    
    ngOnChanges() {
        if (this.url) {
            this.fetchData();
        }
    }
    constructor(
      private cdr: ChangeDetectorRef
    ) {}

    fetchData() {

        this.httpService.post(this.url ,this.SPParams).subscribe((data: any) => {
            if (data.IsSuccess) {
                console.log(data.Result);
                this.source = data.Result.filter((x: { Unassigned: null; })=>x.Unassigned ==null);
                this.target = data.Result.filter((x: { Unassigned: null; })=>x.Unassigned !=null);
              this.cdr.markForCheck();
            } else {
                this.source = [];
                this.target = [];
            }
        });
    }
    
    saveSelection() {
       this.onSave.emit(this.target);


    }
    hideDialog() {
        this.ShowDialog = false;
        this.toggleDialog.emit(this.ShowDialog);
    }

}



