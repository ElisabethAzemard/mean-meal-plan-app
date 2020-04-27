/* IMPORTS */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms'; // To use [(ngModel)]
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { LoginFormComponent } from './login-form/login-form.component';


/* DEFINITION */
@NgModule({
    declarations: [ RegistrationFormComponent, LoginFormComponent ],
    imports: [ CommonModule, FormsModule ],
    exports: [ RegistrationFormComponent, LoginFormComponent ]
})


/* EXPORT */
export class AppFormModule { };
