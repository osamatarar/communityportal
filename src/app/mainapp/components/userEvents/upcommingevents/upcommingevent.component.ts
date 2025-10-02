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
@Component({
    selector: 'upcomming-event',
    standalone: true,
    imports: [CommonModule, TabsModule, SelectButton, FormsModule, ProgressBar, Button, CardModule, TagModule, FluidModule],
    templateUrl: './upcommingevent.component.html'
})
export class UpCommingEventsComponent {
    stateOptions: any[] = [
        { label: 'Free', value: 'free' },
        { label: 'Paid', value: 'paid' }
    ];

    value: string = 'Free';

    onBillingChange(event: any) {
        // alert('Selected Event type:'+ event.value);
        // event.value → 'Free' or 'Paid'
    }


private eventImages = [
    'https://pbs.twimg.com/media/FPAyOgFWYAI6t3d?format=jpg&name=4096x4096',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNQtkMCh0RwmkSIqg8cl4b9kD8-S-ZK7qiQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZK-p67DLAsUfWLk1tmQ_7xRjh3a4tyUnY_A&s',
    'https://www.biztoday.news/wp-content/uploads/2018/01/Abacus-empowers-entrepreneurs-to-contribute-to-Pakistan%E2%80%99s-digital-transformation.jpg',
    'https://dailytimes.com.pk/assets/uploads/2021/06/29/JAbacus-LCCI-Presidents-Award-2021.jpg',

  ];

  cards = Array.from({ length: 5 }).map((_, i) => ({
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
