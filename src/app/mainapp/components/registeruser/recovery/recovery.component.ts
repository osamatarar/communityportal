import { Component, OnInit } from '@angular/core';
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { RightimgsideComponent } from '../rightimgside/rightimgside.component';

@Component({
    selector: 'app-recovery',
    templateUrl: './recovery.component.html',
    styleUrls: ['./recovery.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        InputTextModule,
        InputOtpModule,
        // Custom
        RightimgsideComponent
    ]
})
export class RecoveryComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
