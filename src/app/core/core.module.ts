import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { SidebarComponent } from './master/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProjectListService } from './project-list.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MasterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    MasterComponent,
    SidebarComponent
  ],
  providers: [
    ProjectListService
  ]
})
export class CoreModule { }
