import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoaderService } from './../../services/loaderService';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [AsyncPipe, ProgressSpinnerModule],
  template: `
 @if (loader.loading$ | async) {
  <div class="loader-overlay">
    <p-progressSpinner strokeWidth="4"></p-progressSpinner>
  </div>
}
  `,
  styles: [`
    .loader-overlay {
      position: fixed;
      inset: 0;
      background: rgba(255,255,255,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
    }
  `]
})
export class LoaderComponent {
  constructor(public loader: LoaderService) {}
}
