/* IMPORTS */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms'; // To use [(ngModel)]
import { RegistrationFormComponent } from "./registration-form/registration-form.component";


/* DEFINITION */
@NgModule({
    declarations: [ RegistrationFormComponent ],
    imports: [ CommonModule, FormsModule ],
    exports: [ RegistrationFormComponent ]
})


/* EXPORT */
export class AppFormModule { };
