import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css'],
    standalone: true,
    imports: [CommonModule, Button, Dialog, InputTextModule, ButtonModule, MultiSelectModule, InputNumberModule]
})
export class NewComponent implements OnInit {
    @Input() ShowDialog: boolean = false;
    @Input() HeaderName: string = '';
    @Output() dialogClosed = new EventEmitter<boolean>();

    constructor() {}

    ngOnInit() {}

    hideDialog() {
        this.dialogClosed.emit(false);
    }

    saveSelection() {
        // Add your save logic here
        this.dialogClosed.emit(false);
    }
}
