import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { UpCommingEventsComponent } from "./upcommingevents/upcommingevent.component";
import { BookedEventsComponent } from "./bookedevents/bookedevent.component";

@Component({
  selector: 'user-events',
  standalone: true,
  imports: [CommonModule, TabsModule, UpCommingEventsComponent, BookedEventsComponent],
  templateUrl: './userevent.component.html',

})
export class UserEventsComponent { }
