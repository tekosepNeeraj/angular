import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
public name:any=''
  ngOnInit(): void {
    this.name=sessionStorage.getItem('name');
  }

}
