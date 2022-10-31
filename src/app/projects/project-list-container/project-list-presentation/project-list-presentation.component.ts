import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from '../../project.model';
import { ProjectListPresenterService } from '../project-list-presenter/project-list-presenter.service';

@Component({
  selector: 'app-project-list-presentation',
  templateUrl: './project-list-presentation.component.html',
  viewProviders: [ProjectListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListPresentationComponent implements OnInit {

  @Input() public set mvpclientlist(value: Projects[] | null) {
    if (value) {
      this._mvpList = value;
      this.newList = value
    }
  }

  @Input() public set projectData(res: Projects[] | null) {
    if (res)
      this._projectData = res;
  }

  public get projectData(): Projects[] {
    return this._projectData;
  }
  @Output() public delete: EventEmitter<number>;

  private _projectData!: Projects[];

  constructor(
    private route: Router,
    private projectpresenterservice: ProjectListPresenterService
  ) {
    this.delete = new EventEmitter()
  }
  public newList: Projects[] = [];
  private _mvpList: Projects[] = [];
  public _mvpclientlist: Projects[] = [];

  ngOnInit(): void {

  }
  public onEdit(id: number) {
    this.route.navigateByUrl(`projects/edit/${id}`)
  }
  public onDelete(id: number) {
    this.delete.emit(id)
  }
}