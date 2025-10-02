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


    
private eventImages = [
  // Conference halls / auditoriums
  'https://images.unsplash.com/photo-1529101091764-c3526daf38fe', 

  // Hotels / event spaces
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf', 
  'https://images.unsplash.com/photo-1503428593586-e225b39bddfe', 
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb', 

  // Outdoor venues
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', 
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', 
  'https://images.unsplash.com/photo-1506784983877-45594efa4cbe',

  // Modern halls
  'https://images.unsplash.com/photo-1485217988980-11786ced9454',
  'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0'
];

cards = Array.from({ length: 8 }).map((_, i) => ({
  title: this.getRandomTitle(),
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
    'Toronto, Canada',
    'Sydney, Australia',
    'Tokyo, Japan',
    'Paris, France'
  ];
  return locations[Math.floor(Math.random() * locations.length)];
}

private getRandomTitle() {
  const titles = [
    'Tech Conference',
    'Startup Meetup',
    'AI Workshop',
    'Developer Summit',
    'Community Hall Event',
    'Music Festival',
    'Food Expo',
    'Business Networking'
  ];
  return `${titles[Math.floor(Math.random() * titles.length)]} ${Math.floor(Math.random() * 100)}`;
}


}
