import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent,
      },
    ]),
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
})
export class ProductModule {}
