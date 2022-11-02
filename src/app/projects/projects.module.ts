import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectFormContainerComponent } from './project-form-container/project-form-container.component';
import { ProjectFormPresentationComponent } from './project-form-container/project-form-presentation/project-form-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectListContainerComponent } from './project-list-container/project-list-container.component';
import { ProjectListPresentationComponent } from './project-list-container/project-list-presentation/project-list-presentation.component';
import { SharedModule } from '../shared/shared.module';
import { CardPresentationComponent } from './project-list-container/card-presentation/card-presentation.component';
import { TablePresentationComponent } from './project-list-container/table-presentation/table-presentation.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectFormContainerComponent,
    ProjectFormPresentationComponent,
    ProjectListContainerComponent,
    ProjectListPresentationComponent,
    CardPresentationComponent,
    TablePresentationComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProjectsModule { }
