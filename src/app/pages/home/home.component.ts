import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { RouterLink } from '@angular/router';

export interface Product {
  url_img: string;
  name: string;
  price: number;
  category: number;
  description: string;
  stock: number;
}

const ELEMENT_DATA: Product[] = [
  { name: 'Sabritas', url_img: 'https://www.sabritas.com.mx/wp-content/uploads/2019/07/sabritas-saladas.png', price: 10, category: 1, description: 'Papas fritas', stock: 10 },
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatTableModule, ToolbarComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  displayedColumns: string[] = ['url_img', 'name', 'price', 'category', 'description', 'stock', 'opciones'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<Product>();
}
