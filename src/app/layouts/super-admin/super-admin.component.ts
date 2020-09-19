import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {


  pageTitle: string;
  links: Array<object> = [
    {name: "Dashboard", icon: "md md-dashboard", url: "/admin/dashboard"},
    {name: "Fleets", icon: "fa fa-car", url: "/", links: [{
      name: "Fleet Managers", url: "/"
    },
    {
      name: "Riders", url: "/"
    }]
  },
    {name: "Predict Match", icon: "fa fa-bar-chart-o", url: "/"},
    {name: "Custom Search", icon: "fa fa-search",url: "/"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(title: string){
    this.pageTitle = title;
  }

  loadLinks(){

  }

}
