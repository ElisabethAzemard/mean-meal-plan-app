/* IMPORTS */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; // To use global Angular common directives
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MyHeaderComponent } from "./my-header/my-header.component";
import { SingleItemComponent } from './single-item/single-item.component';
import { SingleInventoryItemComponent } from './single-inventory-item/single-inventory-item.component';


/* DEFINITION */
@NgModule({
    // Import the components
    declarations: [MyHeaderComponent, SingleItemComponent, SingleInventoryItemComponent],
    imports: [CommonModule, RouterModule, FontAwesomeModule],

    // Export the components to enable access from main component
    exports: [MyHeaderComponent, SingleItemComponent, SingleInventoryItemComponent]
})


/* EXPORT */
export class UserInterfaceModule { };
