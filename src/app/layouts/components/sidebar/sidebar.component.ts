import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  links: Array<object> = [
    {name: 'dashboard',url: '/admin/dashboard', icon: 'home'},
    {name: 'Orders', url: 'election/list',  icon: 'shopping_basket'},
    {name: 'Clients', url: 'category/list', icon: 'face'},
    {name: 'Riders', url: 'position/list', icon: 'motorcycle'},
    {name: 'Users', url: 'user/list', icon: 'supervised_user_circle'},
  ]
    


}
