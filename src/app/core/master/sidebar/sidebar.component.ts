import { Component, OnInit } from '@angular/core';
import { UpdateListService } from 'src/app/shared/services/update-list.service';
import { ProjectListService } from '../../project-list.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {


  public projectList: any
  constructor(
    private _projectList: ProjectListService,
    private updateList: UpdateListService
  ) { }

  ngOnInit(): void {
    this._projectList.getProjectData().subscribe(res => {
      this.projectList = res;
    })
    this.updateList.update_list.subscribe((val) => {
      this._projectList.getProjectData().subscribe(res => {
        this.projectList = res;
      })
    })
  }


  navlist = [
    {
      a: 'home',
      class: 'icon-home',
      route: ''
    },
    {
      a: 'Team',
      class: 'icon-team',
      route: ''
    },
    {
      a: 'Favourites',
      class: 'icon-star',
      route: ''
    },
  ]
}