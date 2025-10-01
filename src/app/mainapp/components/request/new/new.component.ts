import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import { StepperModule } from 'primeng/stepper';
import { MultiSelectModule } from 'primeng/multiselect';
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DatePickerModule } from 'primeng/datepicker';
import { FileUploadModule } from 'primeng/fileupload';
@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css'],
    standalone: true,
    imports: [CommonModule, SelectModule, InputTextModule, ButtonModule, ReactiveFormsModule, StepperModule, MultiSelectModule, TextareaModule, InputNumberModule, ToggleButtonModule, DatePickerModule, FileUploadModule]
})
export class NewComponent implements OnInit {
    form!: FormGroup;

    constructor(private ref: DynamicDialogRef) {}

    ngOnInit() {}

    hideDialog() {
        this.ref.close();
    }

    submitForm() {
        if (this.form.valid) {
            this.ref.close(this.form.value); // send data back
        }
    }
}
