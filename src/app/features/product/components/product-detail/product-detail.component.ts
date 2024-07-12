import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { MatCardModule } from '@angular/material/card';
import { ImagePipe as Image} from '../../../../shared/pipes/image.pipe';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    Image,
    MatCardModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(+id).subscribe(product => this.product = product);
    }
  }
}
