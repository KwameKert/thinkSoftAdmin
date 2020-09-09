import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fleet-mananger',
  templateUrl: './fleet-mananger.component.html',
  styleUrls: ['./fleet-mananger.component.css']
})
export class FleetManangerComponent implements OnInit {

  sideBarOpen = true;
  constructor() { }

  ngOnInit() {
  }

  toggleSidebar(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  links: Array<object> = [
    {name: 'dashboard',url: '/admin/dashboard', icon: 'home'},
    {name: 'Orders', url: 'election/list',  icon: 'shopping_basket'},
    {name: 'Vehicle', url: 'category/list', icon: 'directions_car'},
    {name: 'Riders', url: 'position/list', icon: 'motorcycle'}
  ]


}
