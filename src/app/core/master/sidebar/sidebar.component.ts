import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
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