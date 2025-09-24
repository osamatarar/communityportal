import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';
import { FloatLabelModule } from 'primeng/floatlabel';

import { RightimgsideComponent } from '../rightimgside/rightimgside.component';
import { CoreDropdownComponent } from '@/core/components/core.dropdown';
import { GenericHttpService } from '@/services/genericHttpSerivce';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';

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
        CoreDropdownComponent,
        ToastModule
    ]
})
export class RegisterComponent  {
    profileForm: FormGroup;
    httpService: any = inject(GenericHttpService);
    messageService= inject(MessageService);
    
    constructor(private fb: FormBuilder, private router: Router) {
    this.profileForm = this.fb.group(
      {
        FullName: ['', Validators.required],
        Email: ['', [Validators.required, Validators.email]],
        Mobile: [''],
        BloodTypeId: [null, Validators.required],
        MaritalTypeId: [null, Validators.required],
        Password: ['', [Validators.minLength(6)]],
        AccountType:[26],
        confirmPassword: [''],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('Password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password && confirm && password !== confirm ? { passwordMismatch: true } : null;
  }

  onSubmit() {
    if (this.profileForm.valid) {
         this.httpService.post('user/register',this.profileForm.value).subscribe((data: any) => {
              if (data.IsSuccess) {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User Created Successfully' });
               setTimeout(() => {
                  this.gotoLogin();
               }, 5000);
              
              }
          });
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  gotoLogin(){
   this.router.navigate(['/login']);
  }
}
