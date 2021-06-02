import { AfterViewChecked, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Product } from '../../product';



@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProductListComponent {
  pageTitle = 'Products';

  @Input() products: Product[]
  @Input() displayCode: boolean
  @Input() selectedProduct: Product
  @Input() errorMessage: string
  @Output() toggleCode = new EventEmitter<boolean>()
  @Output() intializeProduct = new EventEmitter<void>()
  @Output() currentProduct = new EventEmitter<Product>()


  checkChanged(value: boolean): void {
    this.toggleCode.emit(value)
  }

  newProduct(): void {
    this.intializeProduct.emit()
  }

  productSelected(product: Product): void {
    this.currentProduct.emit(product)
  }



}
