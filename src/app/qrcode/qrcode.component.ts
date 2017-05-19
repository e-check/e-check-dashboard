import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    var form_id = this.route.snapshot.queryParams['form_id']
    var checkin_url = 'http://www.thoughtworks.com?form_id=' + form_id
    toCanvas(qrcode_panel, checkin_url, { scale: 15 }, function (error) {
      if (error) console.error(error)
    })
  }
}
