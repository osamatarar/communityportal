import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { LawajamPricing } from './pricingwidget';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
    selector: 'user-jawam',
    standalone: true,
    imports: [CommonModule, LawajamPricing, FormsModule, SelectButton, ButtonModule, TabsModule, ToolbarModule],
    templateUrl: './lawajam.component.html'
})
export class LawajamComponent {
    stateOptions: any[] = [
        { label: 'Monthly', value: 'monthly' },
        { label: 'Yearly', value: 'yearly' }
    ];

    value: string = 'monthly';

    onBillingChange(event: any) {
        // alert('Selected Plan:'+ event.value);
        // event.value → 'monthly' or 'yearly'
    }
}
