import { LoaderComponent } from '@/core/components/loaderComponent';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, LoaderComponent],
    template: `<app-loader></app-loader><router-outlet></router-outlet>`
})
export class AppComponent {}
