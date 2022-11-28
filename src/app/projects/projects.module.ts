import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProjectFormContainerComponent } from './project-form-container/project-form-container.component';
import { ProjectFormPresentationComponent } from './project-form-container/project-form-presentation/project-form-presentation.component';
import { ProjectInfoContainerComponent } from './project-info-container/project-info-container.component';
import { ProjectListContainerComponent } from './project-list-container/project-list-container.component';
import { ProjectListPresentationComponent } from './project-list-container/project-list-presentation/project-list-presentation.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './projects.service';
import { ProjectInfoPresentationComponent } from './project-info-container/project-info-presentation/project-info-presentation.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectFormContainerComponent,
    ProjectFormPresentationComponent,
    ProjectListContainerComponent,
    ProjectListPresentationComponent,
    ProjectInfoContainerComponent,
    ProjectInfoPresentationComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    ProjectsService
  ]
})
export class ProjectsModule { }