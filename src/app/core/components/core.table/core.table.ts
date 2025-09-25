import { Component, EventEmitter, inject, input, Input, OnChanges, OnInit, Output, signal, SimpleChanges, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService, SortEvent } from 'primeng/api';
import { Table, TableLazyLoadEvent, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Product, ProductService } from '../../../../app/pages/service/product.service';
import { APIResponse, GenericHttpService } from '@/services/genericHttpSerivce';
import { DynamicFormComponent } from '../core.form/dynamic-form.component';
import { TableAction } from '@/core/models/dynamic-field.model';
import { ToggleSwitch } from 'primeng/toggleswitch';
interface Column {
    field: string;
    header: string;
    customExportHeader?: string;
}

interface ExportColumn {
    title: string;
    dataKey: string;
}

export type SortDirection = 'ASC' | 'DESC';

export interface GridDataConfig {
  SPName: string;
  SPParams?: Record<string, any>;
  SearchColumns?: Record<string, string>;
  SortColumns?: Record<string, SortDirection>;
  PageNumber: number;
  PageSize: number;
}

export interface TableColumn {
  field: string;             // property name from your row data
  header: string;            // column title (like "Name")
  sortable?: boolean;        // whether column is sortable
  style?: string;            // custom styles
  isAction?: boolean;
  type? :string;        // for special action columns
}

@Component({
    selector: 'core-table',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        TextareaModule,
        SelectModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        TagModule,
        InputIconModule,
        IconFieldModule,
        ConfirmDialogModule,
        ToggleSwitch
    ],
    templateUrl: `./core.table.html`,
    providers: [MessageService, ProductService, ConfirmationService]
})
export class CoreTable implements OnChanges {
    httpService: any = inject(GenericHttpService);
    @Input() TableHeaderName : string = "";
    @Input() TableSPName :string = "";
    @Input() SPParams : Record<string, any> ={};
    @Input() Actions: TableAction[] = [];
    @Input() Columns : TableColumn[] = [];
    @Input() RefreshData: string =  new Date(Date.now()).toString();
    @Output() actionClicked = new EventEmitter<{ action: string; row: any }>();
     @Output() checkedChange = new EventEmitter<boolean>();
    pageNumber : number= 1;
    pageSize : number= 10;

    SortColumns:Record<string, SortDirection> = {};
    SearchColumns: Record<string, string> = {};

    gridConfig : GridDataConfig = {
        SPName : this.TableSPName,
        SPParams : this.SPParams,
        PageNumber : this.pageNumber,
        PageSize : this.pageSize
    };

    gridData :any;
    total : number=0;


    private buildGridConfig(): GridDataConfig {
    return {
      SPName: this.TableSPName,
      SPParams: this.SPParams,
      SearchColumns: this.SearchColumns,
      SortColumns: this.SortColumns,
      PageNumber: this.pageNumber,
      PageSize: this.pageSize
    };
  }

    onAction(action: TableAction, row: any) {
    if (action.handler) {
      action.handler(row); // inline handler if provided
    } else {
      this.actionClicked.emit({ action: action.action, row });
    }
  }
    loadGridData(event: TableLazyLoadEvent){
       this.pageNumber = event.first && event.rows ? Math.floor(event.first / event.rows) + 1 : 1;
       this.pageSize = event.rows ?? 10;
       this.gridConfig.PageNumber = this.pageNumber;
       this.gridConfig.PageSize = this.pageSize;
       this.buildSort(event.sortField  , event.sortOrder);
       this.loadData();
    }

    buildSort(sortColum: any, sortValue:any) {
        if(sortColum){
          this.SortColumns[sortColum] = sortValue == 1 ? 'ASC' : 'DESC';
        }
        this.gridConfig.SortColumns = this.SortColumns;
    }

    private filterTimeout: any;
    onGlobalFilter(event: Event){
        clearTimeout(this.filterTimeout);
        this.filterTimeout = setTimeout(() => {
        const query = (event.target as HTMLInputElement).value;

        if (this.dt?.globalFilterFields?.length) {
        this.dt.globalFilterFields.forEach((field: string) => {
        this.SearchColumns[field] = query;
        });
    }

        this.gridConfig.SearchColumns = this.SearchColumns;
        this.loadData();
        }, 1000)
    }
    loadData(){
        this.httpService.post("generic/execspgrid",this.gridConfig).subscribe((data: APIResponse<any>) => {
          this.gridData = data.Result.Rows;
          this.total = data.Result.Total;
        });
    }


    get globalFilterFields(): string[] {
        return this.Columns
        .filter(c => c.sortable)
        .map(c => c.field);
    }

    @ViewChild('dt') dt!: Table;
    constructor(
        private confirmationService: ConfirmationService
    ) {}


    ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['TableSPName'] ||
      changes['SPParams'] ||
      changes['SearchColumns'] ||
      changes['SortColumns'] ||
      changes['pageNumber'] ||
      changes['pageSize'] || changes['RefreshData']
    ) {
      this.gridConfig = this.buildGridConfig();
       this.loadData();
    }

    }

    exportCSV() {
        this.dt.exportCSV();
    }

    openNew() {

    }

    editProduct(product: Product) {

    }

    deleteSelectedProducts() {


    }

    hideDialog() {

    }

    deleteProduct(product: Product) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',

        });
    }
    onToggleChange(value: any) {
    this.checkedChange.emit(value);
  }

}
