import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Button } from 'primeng/button';
import { ProgressBar } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { FluidModule } from 'primeng/fluid';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css'],
    standalone: true,
    imports: [CommonModule, TabsModule, SelectButtonModule, Button, ProgressBar, CardModule, TagModule, FluidModule]
})
export class EventsComponent  {
    constructor() {}

    ngOnInit() {}
}
