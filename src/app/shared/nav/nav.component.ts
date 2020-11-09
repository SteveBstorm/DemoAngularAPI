import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items : NbMenuItem[] = [
    { title : 'Liste de contact', link : 'liste', icon : 'book'},
    { title : 'Ajout contact', link : 'new', icon : 'book'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
