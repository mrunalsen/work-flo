import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectFormContainerComponent } from './project-form-container/project-form-container.component';
import { ProjectListContainerComponent } from './project-list-container/project-list-container.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [{
  path: '', component: ProjectsComponent,
  children: [
    {
      path: ``,
      pathMatch: `full`,
      redirectTo: `list`
    },
    {
      path: '', component: ProjectListContainerComponent
    },
    {
      path: 'form', component: ProjectFormContainerComponent
    },
    {
      path: 'edit/:id',
      component: ProjectFormContainerComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }