import { Component, ViewChild, AfterViewInit} from '@angular/core';

import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss']
})
export class BarcodeScannerComponent implements AfterViewInit {

  @ViewChild(BarecodeScannerLivestreamComponent, { static: true })
  barecodeScanner: BarecodeScannerLivestreamComponent;
  barcodeValue: any;

  ngAfterViewInit() {
    this.barecodeScanner.start();
  }

  onValueChanges(result) {
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(started) {
    console.log(started);
  }

}
