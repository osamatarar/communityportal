import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'user-family',
  standalone: true,
  imports: [CommonModule, TabsModule],
  templateUrl: './family.component.html',

})
export class UserFamilyComponent { }
