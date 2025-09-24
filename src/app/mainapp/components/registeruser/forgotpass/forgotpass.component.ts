import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

import { RightimgsideComponent } from '../rightimgside/rightimgside.component';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
    styleUrls: ['./forgotpass.component.css'],
  standalone: true,
      imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          ButtonModule,
          InputTextModule,
          PasswordModule,
          // Custom
          RightimgsideComponent
      ]
})
export class ForgotpassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
