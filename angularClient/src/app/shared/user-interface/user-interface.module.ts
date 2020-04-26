/* IMPORTS */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; // To use global Angular common directives
import { RouterModule } from "@angular/router";

import { MyHeaderComponent } from "./my-header/my-header.component";


/* DEFINITION */
@NgModule({
    // Import the components
    declarations: [MyHeaderComponent],
    imports: [CommonModule, RouterModule],

    // Export the components to enable access from main component
    exports: [MyHeaderComponent]
})


/* EXPORT */
export class UserInterfaceModule { };
