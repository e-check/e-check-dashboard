import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'environments/environment';
import { toCanvas } from 'qrcode'

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var qrcode_panel = document.getElementById('qrcode_panel')
    var activity_id = this.route.snapshot.queryParams['activity_id']
    var checkin_url = environment.echeck_checkin_base_url + '?activity_id=' + activity_id
    toCanvas(qrcode_panel, checkin_url, { scale: 15 }, function (error) {
      if (error) console.error(error)
    })
  }
}
