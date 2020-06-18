import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemModel } from 'src/app/models/item.model';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() item: ItemModel;
  @Output() addItemToInventory = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
