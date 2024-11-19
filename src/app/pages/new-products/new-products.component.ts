import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-new-products',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule, FormsModule, MatButton],
  templateUrl: './new-products.component.html',
  styleUrl: './new-products.component.css'
})
export class NewProductsComponent {
 formProduct!: FormGroup;
 private fb = inject(FormBuilder);

 constructor() {
  this.formProduct = this.fb.group({
    name: [''],
    url_img: [''],
    price: [''],
    category: [''],
    stock: [''],
    description: ['']
  });
 }
}
