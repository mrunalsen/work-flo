import { Component, OnInit } from '@angular/core';
import { UpdateListService } from 'src/app/shared/services/update-list.service';
import { OauthService } from '../../services/oauth.service';
import { ProjectListService } from '../../services/project-list.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {


  public projectList: any;
  public User: any;
  constructor(
    private _projectList: ProjectListService,
    private updateList: UpdateListService,
    private oauth: OauthService
  ) { }

  ngOnInit(): void {
    this._projectList.getProjectData().subscribe(res => {
      this.projectList = res;
    });
    this.updateList.update_list.subscribe((val) => {
      this._projectList.getProjectData().subscribe(res => {
        this.projectList = res;
      });
    });

    this.oauth.userProfile.subscribe((data) => this.User = data);
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
  ];
  public logOut() {
    this.oauth.signOut();
  }
}