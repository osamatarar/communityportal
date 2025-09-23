import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'general-user-profile',
  standalone: true,
  imports: [CommonModule, AvatarModule, FluidModule, ButtonModule, InputTextModule, TabsModule],
  templateUrl: './general.component.html',

})
export class GeneralUserProfileComponent { }