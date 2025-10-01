import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

interface CountryData {
    name: string;
    users: number;
    khums: number;
}
@Component({
    selector: 'app-khums',
    templateUrl: './khums.component.html',
    styleUrls: ['./khums.component.css'],
    standalone: true,
    imports: [CommonModule,ButtonModule]
})
export class KhumsComponent implements OnInit {
    JamaatName = 'Sudan';
    UserCount = '12000';
    KhumsCount = '500000';

    // 🧭 Dummy data for African countries (you can load from JSON later)
    countries: Record<string, CountryData> = {
        Sudan: { name: 'Sudan', users: 12000, khums: 500000 },
        Algeria: { name: 'Algeria', users: 8000, khums: 350000 },
        Mozambique: { name: 'Mozambique', users: 4500, khums: 220000 },
        SouthAfrica: { name: 'South Africa', users: 7600, khums: 400000 },
        Mali: { name: 'Mali', users: 3000, khums: 150000 },
        Nigeria: { name: 'Nigeria', users: 9500, khums: 480000 },
        CentralAfricanRepublic: { name: 'Central African Republic', users: 2800, khums: 130000 },
        Congo: { name: 'Congo', users: 6000, khums: 310000 },
        DemCongo: { name: 'Democratic Republic of the Congo', users: 7200, khums: 360000 },
        Zambia: { name: 'Zambia', users: 5000, khums: 250000 },
        Angola: { name: 'Angola', users: 4000, khums: 200000 },
        Kenya: { name: 'Kenya', users: 6700, khums: 330000 },
        Somalia: { name: 'Somalia', users: 3500, khums: 170000 },
        Eritrea: { name: 'Eritrea', users: 2900, khums: 140000 },
        Ethiopia: { name: 'Ethiopia', users: 8800, khums: 420000 },
        Djbouti: { name: 'Djibouti', users: 1500, khums: 80000 },
        SouthSudan: { name: 'South Sudan', users: 3200, khums: 160000 },
        Egypt: { name: 'Egypt', users: 11000, khums: 520000 },
        Libya: { name: 'Libya', users: 4800, khums: 240000 },
        Tunisia: { name: 'Tunisia', users: 5300, khums: 270000 },
        Morocco: { name: 'Morocco', users: 7500, khums: 380000 },
        WesternSahara: { name: 'Western Sahara', users: 1200, khums: 60000 },
        Mauritania: { name: 'Mauritania', users: 2600, khums: 130000 },
        Senegal: { name: 'Senegal', users: 5800, khums: 290000 },
        Madagascar: { name: 'Madagascar', users: 4300, khums: 210000 },
        Tanzania: { name: 'Tanzania', users: 5400, khums: 290000 },
        Uganda: { name: 'Uganda', users: 4000, khums: 200000 },
        Malawi: { name: 'Malawi', users: 3100, khums: 150000 },
        Namibia: { name: 'Namibia', users: 2000, khums: 100000 },
        Botswana: { name: 'Botswana', users: 2200, khums: 110000 },
        Zimbabwe: { name: 'Zimbabwe', users: 3700, khums: 180000 },
        GuineaBissau: { name: 'Guinea-Bissau', users: 1400, khums: 70000 },
        Guinea: { name: 'Guinea', users: 4600, khums: 230000 },
        Rwanda: { name: 'Rwanda', users: 3300, khums: 160000 },
        SierraLeone: { name: 'Sierra Leone', users: 2500, khums: 120000 },
        Niger: { name: 'Niger', users: 3900, khums: 190000 },
        Cameroon: { name: 'Cameroon', users: 6200, khums: 320000 },
        Liberia: { name: 'Liberia', users: 2100, khums: 100000 },
        IvoryCoast: { name: 'Ivory Coast', users: 5700, khums: 280000 },
        BurkinaFaso: { name: 'Burkina Faso', users: 3400, khums: 170000 },
        Ghana: { name: 'Ghana', users: 6800, khums: 350000 },
        Togo: { name: 'Togo', users: 2300, khums: 110000 },
        Benin: { name: 'Benin', users: 3000, khums: 150000 },
        Gabon: { name: 'Gabon', users: 2700, khums: 130000 },
        Chad: { name: 'Chad', users: 3100, khums: 160000 },
        Burunai: { name: 'Burunai', users: 1800, khums: 90000 }
    };

    constructor() {}

    ngOnInit(): void {}

    // 🔸 Hover handler
    onCountryHover(countryName: string) {
        const data = this.countries[countryName];
        if (data) {
            this.JamaatName = data.name;
            this.UserCount = data.users.toLocaleString();
            this.KhumsCount = data.khums.toLocaleString();
        }
    }

    // 🔸 Leave handler
    onCountryLeave() {
        // // Optional: clear values on hover out
        // this.JamaatName = '';
        // this.UserCount = '';
        // this.KhumsCount = '';
    }

    // 🔸 Click handler
    onCountryClick(countryName: string) {
        const data = this.countries[countryName];
        if (data) {
            this.JamaatName = data.name;
            this.UserCount = data.users.toLocaleString();
            this.KhumsCount = data.khums.toLocaleString();
        }
    }
}
