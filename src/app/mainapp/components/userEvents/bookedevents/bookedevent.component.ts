import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { SelectButtonModule } from "primeng/selectbutton";
import { Button } from "primeng/button";
import { ProgressBar } from "primeng/progressbar";
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { FluidModule } from 'primeng/fluid';

@Component({
    selector: 'booked-event',
    standalone: true,
    imports: [CommonModule, TabsModule, SelectButtonModule, Button, ProgressBar, CardModule, TagModule, FluidModule],
    templateUrl: './bookedevent.component.html'
})
export class BookedEventsComponent {

    
private eventImages = [
    'https://pbs.twimg.com/media/FPAyOgFWYAI6t3d?format=jpg&name=4096x4096',
    'https://dailytimes.com.pk/assets/uploads/2021/06/29/JAbacus-LCCI-Presidents-Award-2021.jpg',

  ];

  cards = Array.from({ length: 2 }).map((_, i) => ({
    title: `Tech Conference ${i + 1}`,
    date: this.getRandomDateRange(),
    location: this.getRandomLocation(),
    price: `$${Math.floor(Math.random() * 100) + 20}`,
    seatsLeft: Math.floor(Math.random() * 100) + 1,
    totalSeats: 500,
    progress: Math.floor(Math.random() * 100),
    image: this.eventImages[i % this.eventImages.length]
  }));

  private getRandomDateRange() {
    const start = new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
    const end = new Date(start);
    end.setDate(start.getDate() + Math.floor(Math.random() * 3) + 1);
    return `${start.toLocaleString('default', { month: 'short' })} ${start.getDate()} - ${end.getDate()}, ${start.getFullYear()}`;
  }

  private getRandomLocation() {
    const locations = [
      'San Francisco, CA',
      'Berlin, Germany',
      'New York, NY',
      'London, UK',
      'Dubai, UAE',
      'Singapore',
      'Toronto, Canada'
    ];
    return locations[Math.floor(Math.random() * locations.length)];
  }


}
