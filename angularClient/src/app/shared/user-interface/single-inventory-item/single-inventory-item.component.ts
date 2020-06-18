import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemModel } from 'src/app/models/item.model';
import { faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-single-inventory-item',
  templateUrl: './single-inventory-item.component.html',
  styleUrls: ['./single-inventory-item.component.scss']
})
export class SingleInventoryItemComponent implements OnInit {

  @Input() item: ItemModel;
  @Output() incrementQty = new EventEmitter();
  @Output() decrementQty = new EventEmitter();
  @Output() removeItemFromInventory = new EventEmitter();
  faTimes = faTimes;
  faPlus = faPlus;
  faMinus = faMinus;

  constructor() { }

  ngOnInit() {
  }

}
