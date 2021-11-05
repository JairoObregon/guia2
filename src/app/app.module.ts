import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsListComponent  } from './products-list/products-list.component';
import { ProductRowComponent  } from './product-row/product-row.component';
import { ProductImageComponent  } from './product-image/product-image.component';
import { ProductDepartmentComponent  } from './product-department/product-department.component';
import { PriceDisplayComponent  } from './price-display/price-display.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent,
    ProductRowComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
