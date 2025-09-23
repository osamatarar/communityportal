import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { GeneralUserProfileComponent } from './general/general.compoenet';
import { LawajamComponent } from './lawajam/lawajam.component';

@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [CommonModule, TabsModule,LawajamComponent, GeneralUserProfileComponent],
  templateUrl: './userprofile.component.html',

})
export class UserProfileComponent { }
