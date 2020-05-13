import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import {UserModule} from './user/user.module';
import { ProductsComponent } from './products/products.component';
import {SharedModule} from './shared/shared.module';
import {StorageService} from './shared/services/storage.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
