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
    source: any[] = [];
    @Input() target: any[] = [];
    @Input() url: string = '';
    @Input() saveurl: string = '';
    @Output() onSave = new EventEmitter<any[]>();
    @Input() displayColumn: string = '';
    @Input() SPParams: Record<string, any> = {};
    @Input() ShowDialog: boolean = false;
    @Output() toggleDialog = new EventEmitter<boolean>();
    ngOnChanges() {
        if (this.url) {
            this.fetchData();
        }
    }
    constructor(
      private cdr: ChangeDetectorRef
    ) {}
    fetchData() {
        this.httpService.getAll(this.url).subscribe((data: any) => {
            if (data.IsSuccess) {
                this.source = data.Result.UnAssigned;
                this.target = data.Result.Assigned;
              this.cdr.markForCheck();
            } else {
                this.source = [];
                this.target = [];
            }
              
        });
    }
    
    saveSelection() {
       this.onSave.emit(this.target);

        // this.httpService.post(this.saveurl,this.target).subscribe((response: any) => { 
              
        //      });
        // this.hideDialog();
    }
    hideDialog() {
        this.ShowDialog = false;
        this.toggleDialog.emit(this.ShowDialog);
    }

}



