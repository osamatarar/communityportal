import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-statcards',
    templateUrl: './statcards.component.html',
    styleUrls: ['./statcards.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class StatcardsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
