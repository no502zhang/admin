import { Component, OnInit } from '@angular/core';

import { Menu } from 'src/app/core/menu.model';
import { MenuService } from 'src/app/core/menu.service';

@Component({
  selector: 'layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.css']
})
export class LayoutDefaultComponent implements OnInit {
  isCollapsed = false;
  sideMenus: Menu[];
  headerMenus: Menu[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getHeaderMenus();
    this.getSideMenus();
  }

  getHeaderMenus() {
    this.menuService.getMenus('header').subscribe(menus => this.headerMenus = menus);
  }

  getSideMenus() {
    this.menuService.getMenus('sidebar').subscribe(menus => this.sideMenus = menus);
  }
}
