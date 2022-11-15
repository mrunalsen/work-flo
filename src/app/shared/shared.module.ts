import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchPipe } from './pipes/search.pipe';
import { UpdateListService } from './services/update-list.service';



@NgModule({
  declarations: [
    PaginationComponent,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    SearchPipe
  ],
  providers: [
    UpdateListService
  ]
})
export class SharedModule { }
