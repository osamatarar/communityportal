import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

import { RightimgsideComponent } from '../rightimgside/rightimgside.component';
import { Router } from '@angular/router';
import { GenericHttpService } from '@/services/genericHttpSerivce';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        InputTextModule,
        PasswordModule,
        // Custom
        RightimgsideComponent,
        ToastModule
    ]
})
export class LoginComponent implements OnInit {
     profileForm: FormGroup;
    httpService: any = inject(GenericHttpService);
    messageService= inject(MessageService);
    constructor(private fb: FormBuilder, private router: Router) {
    this.profileForm = this.fb.group(
      {
        Email: ['', [Validators.required, Validators.email]],
        
        Password: ['', [Validators.minLength(6)]],
        
    });
  }

    ngOnInit() {}

    onSubmit() {
    if (this.profileForm.valid) {
         this.httpService.post('user/login',this.profileForm.value).subscribe((data: any) => {
              if (data.IsSuccess) {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User login Successfully' });
                localStorage.setItem('authToken', data.Result.Token);
               this.gotoHomePage(data.Result.redirectUrl);
              //  setTimeout(() => {
              //     this.gotoHomePage();
              //  }, 1000);
              }
              else {
                 this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Username & password.'});
              }
          });
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  gotoHomePage(url :string){
   this.router.navigate([url]);
  }
}
