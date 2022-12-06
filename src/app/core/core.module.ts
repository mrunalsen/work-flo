import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MasterComponent } from './master/master.component';
import { SidebarComponent } from './master/sidebar/sidebar.component';
import { ProjectListService } from './services/project-list.service';



@NgModule({
  declarations: [
    MasterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    OAuthModule.forRoot()
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
