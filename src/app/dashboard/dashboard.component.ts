import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcheckService } from './../echeck.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  activities: Array<any>;

  constructor(
    private router: Router,
    private echeckService: EcheckService
  ) { }

  ngOnInit(): void {
    this.showActivities()
  }

  showQrcode(form_id: string): void {
    this.router.navigate(['/qrcode'], { queryParams: { form_id: form_id } });
  }

  showActivities(): void {
    this.echeckService
      .getActivities()
      .then(activities => this.activities = activities);
  }

  addActivity(activity_name, form_id): void {
    this.echeckService
      .createActivity(activity_name, form_id)
      .then(activity => this.activities.push(activity))
  }

  gotoCheckinList(activity_name, form_id) {
    this.router.navigate(['/checkinlist'], { queryParams: { activity_name: activity_name, form_id: form_id } });
  }
}
