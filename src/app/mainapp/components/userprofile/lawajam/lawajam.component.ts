import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'user-jawam',
  standalone: true,
  imports: [CommonModule,FormsModule,SelectButton,ButtonModule,TabsModule],
  templateUrl: './lawajam.component.html',

})
export class LawajamComponent {

    stateOptions: any[] = [{ label: 'Monthly', value: 'monthly' },{ label: 'Yearly', value: 'yearly' }];

    value: string = 'monthly';


 onBillingChange(event: any) {

   // alert('Selected Plan:'+ event.value); 
    // event.value → 'monthly' or 'yearly'
  }

 }
