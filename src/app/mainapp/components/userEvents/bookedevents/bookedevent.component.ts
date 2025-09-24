import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { SelectButtonModule } from "primeng/selectbutton";
import { Button } from "primeng/button";
import { ProgressBar } from "primeng/progressbar";

@Component({
  selector: 'booked-event',
  standalone: true,
  imports: [CommonModule, TabsModule, SelectButtonModule, Button, ProgressBar],
  templateUrl: './bookedevent.component.html',

})
export class BookedEventsComponent { }
