import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
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
  query: string;
  public isTable: boolean;
  public isCards: boolean;
  public innerWidth

  @Input() public set projectData(res: Projects[] | null) {
    if (res)
      if (!this._newList) {
        this._newList = res;
      }
    this._projectData = res;
  }

  public get projectData(): Projects[] {
    return this._projectData;
  }

  @Output() public delete: EventEmitter<number>;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.innerWidth >= 770 ? (this.isTable = true, this.isCards = false) : (this.isTable = false, this.isCards = true);
  }
  private _projectData!: Projects[];

  constructor(
    private route: Router,
    private projectpresenterservice: ProjectListPresenterService,
    private cdr: ChangeDetectorRef,
  ) {
    this.delete = new EventEmitter();
    this.isTable = false;
    this.isCards = false;
  }
  public newList: Projects[];
  private _newList: Projects[];
  public _mvpclientlist: Projects[];

  ngOnInit(): void {
    this.onResize(event);
    this.cdr.markForCheck();
  }
  public onEdit(id: number) {
    this.route.navigateByUrl(`projects/edit/${id}`);
  };
  public onDelete(id: number) {
    this.delete.emit(id);
  };

  changePage(userList: Projects[]) {
    this.newList = userList;
    this.cdr.detectChanges();
  };
}