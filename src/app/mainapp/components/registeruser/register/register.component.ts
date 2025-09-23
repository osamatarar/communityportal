import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';
import { FloatLabelModule } from 'primeng/floatlabel';

import { RightimgsideComponent } from '../rightimgside/rightimgside.component';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        InputTextModule,
        PasswordModule,
        SelectModule,
        FloatLabelModule,
        // Custom
        RightimgsideComponent
    ]
})
export class RegisterComponent implements OnInit {
    bloodTypes = [
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B' },
        { label: 'AB', value: 'AB' },
        { label: 'O', value: 'O' }
    ];

    maritalStatuses = [
        { label: 'Single', value: 'single' },
        { label: 'Married', value: 'married' }
    ];

    constructor() {}

    ngOnInit() {}
}
