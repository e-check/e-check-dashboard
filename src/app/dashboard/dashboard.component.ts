import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { toCanvas } from 'qrcode'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  showQrcode(){
    this.router.navigate(['/qrcode',"abc"]);
  }
}
