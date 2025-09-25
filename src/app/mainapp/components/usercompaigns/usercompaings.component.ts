import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { UpCommingCompaingsComponent } from './upcomingcompaign/upcomingcompaing.component';
import { JoinedCompaingComponent } from './joinedcompaign/joinedcompaing.component';

@Component({
  selector: 'user-compaign',
  standalone: true,
  imports: [CommonModule, TabsModule, UpCommingCompaingsComponent, JoinedCompaingComponent],
  templateUrl: './usercompaigns.component.html',

})
export class UserCompaingComponent { }
