import { Component, Input, OnChanges, Output, EventEmitter, SimpleChanges, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormConfig, FieldConfig, TableAction } from '../../models/dynamic-field.model';
import { DynamicFormService } from '../../services/dynamic-form.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FluidModule } from 'primeng/fluid';
import { TextareaModule } from 'primeng/textarea';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GenericHttpService } from '@/services/genericHttpSerivce';
import { ToastModule } from 'primeng/toast';
import { CoreDropdownComponent } from '../core.dropdown';
import { DatePickerModule } from 'primeng/datepicker';
import { FileUploadModule } from 'primeng/fileupload';
import { FilePreviewComponent } from '../filepreview/fileperview.component';
import { CoreCheckBoxComponent } from '../core.checkbox';


@Component({
selector: 'dynamic-form',
templateUrl: './dynamic-form.component.html',
styleUrl :'./dynamic-form.css',
standalone:true,
imports: [ReactiveFormsModule,FilePreviewComponent, FileUploadModule, ToastModule,CoreDropdownComponent, DatePickerModule, FluidModule, DialogModule, TextareaModule, InputTextModule, ButtonModule, CheckboxModule, RadioButtonModule, InputTextModule,CoreCheckBoxComponent],
})
export class DynamicFormComponent implements OnChanges {

    httpService: any = inject(GenericHttpService);

    @Input() config!: FormConfig;
    @Input() patchData! : any;

    @Input() apiName : string ='';
    @Input() HeaderName :string ='';

    @Output() submitForm = new EventEmitter<any>();
    @Output() toggleDialog = new EventEmitter<boolean>();


    @Input() ShowDialog : boolean = false;

    form!: FormGroup;

    constructor(private dfs: DynamicFormService,
                private confirmationService: ConfirmationService,
                private messageService: MessageService) {}


    ngOnChanges(changes: SimpleChanges) {
        if (changes['config'] && this.config) {
        this.form = this.dfs.buildForm(this.config);
        }

        if (changes['patchData'] && this.form && this.patchData) {
         this.form.reset();
         this.form.patchValue(this.patchData);
        }
        this.loadAttachments();
    }



    onSubmit() {
        if (this.form.valid) {

        if(this.form.value.ID > 0){
          this.httpService.update(this.apiName,this.form.value.ID , this.form.value).subscribe((data:any) => {
          (data.IsSuccess)
          {
           this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Update Successfully' });
          }});
        }
        else {
           this.httpService.post(this.apiName, this.form.value).subscribe((data:any) => {
          (data.IsSuccess)
          {
           this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Save Successfully' });
          }

        });
        }
        this.hideDialog();
        this.submitForm.emit(this.form.value);

        } else {
        this.form.markAllAsTouched();
        }
    }


    trackByName(_index: number, field: FieldConfig)
    { return field.name; }

    getErrorMessage(controlName: string) {
        const control = this.form.get(controlName);
        if (!control || !control.errors) return null;
        if (control.errors['required']) return 'This field is required';
        if (control.errors['minlength']) return `Minimum ${control.errors['minlength'].requiredLength} characters required`;
        if (control.errors['maxlength']) return `Maximum ${control.errors['maxlength'].requiredLength} characters allowed`;
        if (control.errors['email']) return 'Invalid email';
        if (control.errors['min']) return `Minimum value is ${control.errors['min'].min}`;
        if (control.errors['max']) return `Maximum value is ${control.errors['max'].max}`;
        if (control.errors['pattern']) return 'Invalid format';
        return 'Invalid value';
   }


   getGroups(controls: FieldConfig[]) {
    const groups: { name: string; controls: FieldConfig[] }[] = [];
    const grouped = controls.filter(c => !c.fullWidth);

    const groupMap = new Map<string, FieldConfig[]>();
    grouped.forEach(c => {
        const g = c.group || `group_${c.name}`;
        if (!groupMap.has(g)) groupMap.set(g, []);
        groupMap.get(g)!.push(c);
    });

    groupMap.forEach((value, key) => {
        groups.push({ name: key, controls: value });
    });

    return groups;
    }

    getFullWidth(controls: FieldConfig[]) {
    return controls.filter(c => c.fullWidth);
    }

     hideDialog() {
            this.ShowDialog = false;
            this.toggleDialog.emit(this.ShowDialog);
    }

    uploadedFiles: any[] = [];
    onUpload(event: any) {
          for (const file of event.files) {
      const formData = new FormData();
      formData.append('file', file, file.name);

      this.httpService.post('user/upload', formData)
        .subscribe({
          next: (res: { filePath: any; }) => {
            this.uploadedFiles.push({
              name: file.name,
              objectURL: res.filePath   // returned from backend
            });
            this.messageService.add({ severity: 'success', summary: 'Uploaded', detail: file.name });
          },
          error: () => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: file.name });
          }
        });
    }
    }


    loadAttachments() {
    this.httpService.getAll('user/GetFiles')
      .subscribe((res: any[]) => {
        this.uploadedFiles = res.map(file => ({
          name: file.name,
          objectURL: file.url
        }));
      });
  }
}
