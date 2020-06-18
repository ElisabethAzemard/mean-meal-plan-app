/* IMPORTS */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // To use [(ngModel)]
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AddItemComponent } from './add-item/add-item.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from "./registration-form/registration-form.component";


/* DEFINITION */
@NgModule({
    declarations: [ RegistrationFormComponent, LoginFormComponent, AddItemComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
    exports: [ RegistrationFormComponent, LoginFormComponent, AddItemComponent]
})


/* EXPORT */
export class AppFormModule { };
