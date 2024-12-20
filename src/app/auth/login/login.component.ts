import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule, FormsModule, MatButton, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  private fb = inject(FormBuilder);
  private _authS = inject(AuthService);
  formLogin!: FormGroup;

  constructor(private router : Router) {
    this.formLogin = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  login(){
    console.log('Iniciando sesión');
    console.log(this.formLogin.value);
    if(this.formLogin.valid){
      this._authS.login(this.formLogin.value).subscribe((response: any = {} )=> {
        console.log(response)
        if(response){
          localStorage.setItem('token', response.token);
           this.router.navigate(['/home']);
        }
      })
    }
  }
}
