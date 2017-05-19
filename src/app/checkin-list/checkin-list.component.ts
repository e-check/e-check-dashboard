import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcheckService } from './../echeck.service';

@Component({
  selector: 'app-checkin-list',
  templateUrl: './checkin-list.component.html',
  styleUrls: ['./checkin-list.component.css']
})
export class CheckinListComponent implements OnInit {
  title: string;
  form_id: string;
  checkin_list: Array<any>

  constructor(
    private route: ActivatedRoute,
    private echeckService: EcheckService
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.queryParams['activity_name'];
    this.form_id = this.route.snapshot.queryParams['form_id'];

    this.showCheckinList(this.form_id);
  }

  showCheckinList(form_id) {
    this.echeckService
      .getCheckinList(form_id)
      .then(checkin_list => this.checkin_list = checkin_list)
  }
}
