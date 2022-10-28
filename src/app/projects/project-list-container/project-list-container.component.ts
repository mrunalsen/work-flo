import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateListService } from 'src/app/shared/update-list.service';
import { Projects } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-list-container',
  templateUrl: './project-list-container.component.html'
})
export class ProjectListContainerComponent implements OnInit {
  public project$: Observable<Projects[]>

  constructor(private projectService: ProjectsService, private updatelist: UpdateListService) {
    this.project$ = new Observable()
  }

  ngOnInit(): void {
    this.getData();
  }
  public getData() {
    this.project$ = this.projectService.getProjectData()
  }
  public deleteData(id: number) {
    this.projectService.deleteProjectData(id).subscribe(() => {
      this.getData();
      this.updatelist.nextMethod(true)
    })
  }
}