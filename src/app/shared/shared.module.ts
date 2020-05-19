import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {StorageService} from './services/storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [],
  providers: [StorageService]
})
export class SharedModule {

}
