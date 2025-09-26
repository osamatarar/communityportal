import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { SelectButton } from "primeng/selectbutton";
import { FormsModule } from '@angular/forms';
import { ProgressBar } from "primeng/progressbar";
import { Button } from "primeng/button";
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { FluidModule } from 'primeng/fluid';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
@Component({
    selector: 'upcomming-event',
    standalone: true,
    imports: [
        CommonModule, TabsModule, SelectButton, FormsModule, ProgressBar, Button, CardModule, TagModule, FluidModule, AutoCompleteModule,
        InputNumberModule,
        DatePickerModule,
        IconFieldModule,
        InputIconModule
    ],
    templateUrl: './uservenues.component.html'
})
export class UserVenuesComponent {
    stateOptions: any[] = [
        { label: 'Free', value: 'free' },
        { label: 'Paid', value: 'paid' }
    ];

    items: any[] = [
        { name: 'Venue 1' },
        { name: 'Venue 2' },
    ]

    value: string = 'Free';

    onBillingChange(event: any) {
        // alert('Selected Event type:'+ event.value);
        // event.value → 'Free' or 'Paid'
    }
}
