import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';


@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss']
})
export class BarcodeScannerComponent implements AfterViewInit {

  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerComponent;
  allowedFormats: any;
  scannerEnabled: boolean;
  barcodeValue: string;

  constructor() {
    this.allowedFormats = [BarcodeFormat.EAN_13, BarcodeFormat.CODE_128];
  }

  ngAfterViewInit() {
  }

  scanSuccessHandler(barcode) {
    this.barcodeValue = barcode;
    this.scannerEnabled = false;
  }

}
