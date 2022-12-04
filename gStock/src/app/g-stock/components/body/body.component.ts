import { Component, OnInit } from '@angular/core';
import { listeMenu } from './menu_liste';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  menu!: {label: string, route: string}[];
  constructor() { }

  ngOnInit(): void {
    this.menu = listeMenu;
  }

}
