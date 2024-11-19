import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule, FormsModule, MatButton, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formRegister!: FormGroup;
  private fb = inject(FormBuilder);
  private _authS = inject(AuthService)

  constructor(private router : Router) {
    this.formRegister = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    });
  }

  register () {
    if(this.formRegister.valid){
      this._authS.register(this.formRegister.value).subscribe((resp: any) => {
        console.log(resp)
        if(resp){
          this.router.navigate(['/login']);
        }
      })
    }
  }

}
