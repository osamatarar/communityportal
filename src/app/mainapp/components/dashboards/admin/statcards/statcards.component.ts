import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'app-statcards',
    templateUrl: './statcards.component.html',
    styleUrls: ['./statcards.component.css'],
    standalone: true,
    imports: [CommonModule,ChartModule] // ✅ PrimeNG chart module
})
export class StatcardsComponent implements OnInit {
    lineData: any;
    lineOptions: any;

    barData: any;
    barOptions: any;

    doughnutData: any;
    doughnutOptions: any;

    ngOnInit() {
        this.initCharts();
    }

    initCharts() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.lineData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Male',
                    data: [10, 15, 20, 25, 18, 22],
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-500'),
                    borderColor: documentStyle.getPropertyValue('--p-primary-500'),
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Female',
                    data: [8, 12, 15, 18, 20, 25],
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                    borderColor: documentStyle.getPropertyValue('--p-primary-200'),
                    fill: false,
                    tension: 0.4
                }
            ]
        };

        this.lineOptions = {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: false }
            }
        };


        this.barData = {
            labels: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            datasets: [
                {
                    label: 'Blood #',
                    data: [25, 5, 30, 4, 10, 2, 40, 3],
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-500'),
                    borderColor: documentStyle.getPropertyValue('--p-primary-500'),
                    borderWidth: 1
                }
            ]
        };

        this.barOptions = {
            responsive: true,
            indexAxis: 'x', // make bars horizontal
            plugins: {
                legend: { display: false, position: 'bottom' },
                title: { display: false }
            },
            scales: {
                x: { beginAtZero: true }
            }
        };


        this.doughnutData = {
            labels: ['Single', 'Married', 'Divorced', 'Widowed'],
            datasets: [
                {
                    data: [40, 50, 5, 5],
                    backgroundColor: [documentStyle.getPropertyValue('--p-indigo-500'), documentStyle.getPropertyValue('--p-purple-500'), documentStyle.getPropertyValue('--p-teal-500'), documentStyle.getPropertyValue('--p-orange-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--p-indigo-400'), documentStyle.getPropertyValue('--p-purple-400'), documentStyle.getPropertyValue('--p-teal-400'), documentStyle.getPropertyValue('--p-orange-400')],
                    borderWidth: 0
                }
            ]
        };

        this.doughnutOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 8,
                        font: { size: 9 } // ✅ smaller legend text
                    }
                },
                title: { display: false }
            },
            cutout: '65%' // ✅ make chart slightly thicker so legend fits better
        };
    }
}
