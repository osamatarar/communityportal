import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'card-management',
  standalone: true,
  imports: [CommonModule, TabsModule],
  templateUrl: './cardmanagement.compoent.html',

})
export class CardManagementComponent { }
