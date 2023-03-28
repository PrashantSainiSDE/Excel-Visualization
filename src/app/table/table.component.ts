import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  exData: any = [];
  show = this.mainService.isValid;
  constructor(private mainService: MainService, private router: Router) {}

  ngOnInit() {
    this.exData = this.mainService.data;
  }
  getLabel(data: any) {
    this.mainService.logoLabel = data;
    this.router.navigate(['/chart']);
  }

}
