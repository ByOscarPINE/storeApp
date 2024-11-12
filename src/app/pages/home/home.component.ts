import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { RouterLink } from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';
import { Product } from '../../app.interface';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatTableModule, ToolbarComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  private _apiProdcuts = inject(ApiProductsService);

  constructor() { 
    this._apiProdcuts.getProducts().subscribe( (response : any) => {
      console.log(response);
      this.dataSource = response;
      }
    )
  }

  displayedColumns: string[] = ['url_img', 'name', 'price', 'category', 'description', 'stock', 'opciones'];
  dataSource: Product[] = [];
  clickedRows = new Set<Product>();


  delProduct(id: number){
    this._apiProdcuts.delProduct(id).subscribe( (response : any) => {
      console.log(response);
      }
    )
    console.log('Eliminando producto con id: ' + id);
  }
}
