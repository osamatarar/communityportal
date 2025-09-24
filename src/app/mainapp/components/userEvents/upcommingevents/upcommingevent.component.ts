import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { SelectButton } from "primeng/selectbutton";
import { FormsModule } from '@angular/forms';
import { ProgressBar } from "primeng/progressbar";
import { Button } from "primeng/button";

@Component({
  selector: 'upcomming-event',
  standalone: true,
  imports: [CommonModule, TabsModule, SelectButton, FormsModule, ProgressBar, Button],
  templateUrl: './upcommingevent.component.html',

})
export class UpCommingEventsComponent { 
    stateOptions: any[] = [{ label: 'Free', value: 'free' },{ label: 'Paid', value: 'paid' }];

    value: string = 'Free';


 onBillingChange(event: any) {

   // alert('Selected Event type:'+ event.value); 
    // event.value → 'Free' or 'Paid'
  }
}
