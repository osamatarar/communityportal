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
    selector: 'Joined-compaing',
    standalone: true,
    imports: [CommonModule, TabsModule, SelectButtonModule, Button, ProgressBar, CardModule, TagModule, FluidModule],
    templateUrl: './joinedcompaign.component.html'
})
export class JoinedCompaingComponent {

    
    campaignImages = [
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d', // education
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d', // children
 
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee', // food drive
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c', // healthcare
  'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d', // clean water
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c'  // charity hands
];

campaigns = Array.from({ length: 2 }).map((_, i) => {
  const goal = Math.floor(Math.random() * 100000) + 20000; // $20k–$120k
  const raised = Math.floor(Math.random() * goal);
  const progress = Math.floor((raised / goal) * 100);

  return {
    title: this.getRandomTitle(),
    description: this.getRandomDescription(),
    image: this.campaignImages[Math.floor(Math.random() * this.campaignImages.length)],
    raised,
    goal,
    progress
  };
});

private getRandomTitle() {
  const titles = [
    'Support Education for All',
    'Clean Water Initiative',
    'Help Flood Victims',
    'Feed the Hungry',
    'Medical Aid for Families',
    'Plant Trees, Save Earth',
    'Scholarship for Children'
  ];
  return titles[Math.floor(Math.random() * titles.length)];
}

private getRandomDescription() {
  const descriptions = [
    'Help us provide scholarships, uniforms, and books to children from low-income families.',
    'Join us in delivering clean water to rural areas in need.',
    'Support flood-affected families with food, shelter, and medical care.',
    'Contribute to our food drive and fight hunger together.',
    'Provide essential medicines and health checkups for underprivileged communities.',
    'Plant trees to combat climate change and build a greener tomorrow.',
    'Sponsor children to continue their studies without financial hurdles.'
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}
}
