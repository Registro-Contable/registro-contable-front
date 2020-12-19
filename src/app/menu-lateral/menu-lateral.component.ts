import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  isExpanded = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isExpanded = !this.isExpanded;
  }

}
