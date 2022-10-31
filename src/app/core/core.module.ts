import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { SidebarComponent } from './master/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MasterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MasterComponent,
    SidebarComponent
  ]
})
export class CoreModule { }
