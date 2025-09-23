import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
      Community Portal - Developed by
        <a href="https://abacus-global.com" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Abacus</a>
    </div>`
})
export class AppFooter {}
