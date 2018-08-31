import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {
  isCollapsed = false;
  isReverseArrow = false;
  width = 240;

  constructor() { }

  ngOnInit() {
  }

}
