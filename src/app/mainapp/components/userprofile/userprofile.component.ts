import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { GeneralUserProfileComponent } from './general/general.compoenet';
import { LawajamComponent } from './lawajam/lawajam.component';
import { UserFamilyComponent } from './family/family.component';
import { CardManagementComponent } from "./cardmanagement/cardmanagemet.compoent";

@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [CommonModule, UserFamilyComponent, TabsModule, LawajamComponent, GeneralUserProfileComponent, CardManagementComponent],
  templateUrl: './userprofile.component.html',

})
export class UserProfileComponent { }
