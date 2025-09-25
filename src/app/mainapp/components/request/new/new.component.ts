import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css'],
    standalone: true,
    imports: [CommonModule, SelectModule, InputTextModule, ButtonModule, ReactiveFormsModule]
})
export class NewComponent implements OnInit {
    form!: FormGroup;
    selectedRType: any;

    RequestTypes = [
        { name: 'LPO (guarantees to hospitals in case of Hospitalization)', value: 'LPO' },
        { name: 'Medical Insurance Plans', value: 'MedicalInsurance' },
        { name: 'Life Insurance Plans', value: 'LifeInsurance' },
        { name: 'Rebates on School Fees', value: 'SchoolRebates' },
        { name: 'Loans for Higher Education', value: 'EducationLoan' },
        { name: 'Loans for Business Startups', value: 'BusinessStartupLoan' },
        { name: 'Loans for Business Assistance', value: 'BusinessAssistLoan' }
    ];

    constructor(private ref: DynamicDialogRef) {}

    ngOnInit() {
        this.form = new FormGroup({
            requestType: new FormControl(null),
            hospitalName: new FormControl(''),
            policyNumber: new FormControl(''),
            beneficiaryName: new FormControl('')
        });
    }

    onRequestTypeChange(event: any) {
        this.selectedRType = event.value.value;
    }

    hideDialog() {
        this.ref.close();
    }

    submitForm() {
        if (this.form.valid) {
            this.ref.close(this.form.value); // send data back
        }
    }
}
