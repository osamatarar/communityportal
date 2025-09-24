import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';
import { FloatLabelModule } from 'primeng/floatlabel';

import { RightimgsideComponent } from '../rightimgside/rightimgside.component';
import { CoreDropdownComponent } from '@/core/components/core.dropdown';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        InputTextModule,
        PasswordModule,
        SelectModule,
        FloatLabelModule,
        // Custom
        RightimgsideComponent,
        CoreDropdownComponent
    ]
})
export class RegisterComponent  {
 profileForm: FormGroup;

constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group(
      {
        FullName: ['', Validators.required],
        Email: ['', [Validators.required, Validators.email]],
        Mobile: [''],
        BloodTypeId: [null, Validators.required],
        MaritalTypeId: [null, Validators.required],
        Password: ['', [Validators.minLength(6)]],

        confirmPassword: [''],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password && confirm && password !== confirm ? { passwordMismatch: true } : null;
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Form Submitted:', this.profileForm.value);
    } else {
      this.profileForm.markAllAsTouched();
    }
  }
}
