import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule, FormsModule, MatButton,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  private fb = inject(FormBuilder);
  private _authS = inject(AuthService)
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
      this._authS.login(this.formLogin.value).subscribe(response => {
        console.log(response)
        if(response){
           this.router.navigate(['/home']);
        }
      })
    }
  }
}
