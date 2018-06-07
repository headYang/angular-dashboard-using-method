import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './page-menu';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }
  menu = MENU_ITEMS;
  ngOnInit() {
  }

}
