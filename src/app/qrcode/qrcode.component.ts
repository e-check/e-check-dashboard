import { Component, OnInit } from '@angular/core';
import { toCanvas } from 'qrcode'

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var qrcode_panel = document.getElementById('qrcode_panel')

    toCanvas(qrcode_panel, 'http://www.thoughtworks.com', function (error) {
      if (error) console.error(error)
      console.log('success!');
    })
  }
}
