import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UpdateListService } from 'src/app/shared/update-list.service';
import { Projects } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-form-container',
  templateUrl: './project-form-container.component.html'
})
export class ProjectFormContainerComponent implements OnInit {

  public project$: Observable<Projects[]>
  public id: number
  constructor(
    private route: Router,
    private projectService: ProjectsService,
    private activatedroute: ActivatedRoute,
    private updateList: UpdateListService
  ) {
    this.project$ = new Observable()
    this.id = parseInt(this.activatedroute.snapshot.params['id'])
    if (this.id) {
      console.log(this.id);
      this.project$ = this.projectService.getProjectById(this.id)
    }
  }

  ngOnInit(): void {
    // this.getData()
  }
  // public getData() {
  //   this.project$ = this.projectService.getProjectData()
  // }
  public addData(form: Projects) {
    this.projectService.addProjectData(form).subscribe((res) => {
      this.route.navigateByUrl('/projects/list')
      this.updateList.nextMethod(true);
    })
  }
  public onEdit(form: Projects) {
    this.projectService.editProjectData(form, this.id).subscribe((res: any) => {
      alert('Edit Success')
      this.route.navigateByUrl('projects/list')
    })
  }
}
