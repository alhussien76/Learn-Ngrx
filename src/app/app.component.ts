import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProductState } from './products/state/product.reducer';
import { Load } from './products/state/product.actions'


@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<ProductState>) { }
  ngOnInit() {
    this.store.dispatch(new Load())


  }
}
