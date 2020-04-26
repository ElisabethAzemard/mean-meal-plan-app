/* IMPORTS */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserModel } from "../../../models/user.model";


/* DEFINITION */
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styles: []
})


/* EXPORT */
export class RegistrationFormComponent implements OnInit {
  @Input() formObject: UserModel;

  // The @Output() decorator enable component to send data to main component with an event
  @Output() sendFormData = new EventEmitter();

  // Create a varible to toggle the form
  public formIsOpen: Boolean = false;

  // Create an object for errors
  public formError;

  constructor() { }

  // Create a function to reset form error
  private resetFormError = () => {
    this.formError = {
      score: 0,
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      repeatePassword: false,
      cgu: false
    }
  }

  // Create a function to manipulate checkbox
  public checkConditions = () => {
    // Invert value
    this.formObject.cgu = !this.formObject.cgu;

    // Hide error
    this.formError.cgu = false;
  }

  // Creta a function for the form submission
  public formSubmission = () => {
    // Reset errors
    this.resetFormError()

    // Test mandatory fields: firstName
    if (this.formObject.firstName.length <= 1) {
      this.formError.score++;
      this.formError.firstName = true;
    }

    // Test mandatory fields: lastName
    if (this.formObject.lastName.length <= 1) {
      this.formError.score++;
      this.formError.lastName = true;
    }

    // Test mandatory fields: email
    if (this.formObject.email.length <= 1) {
      this.formError.score++;
      this.formError.email = true;
    }

    // Test mandatory fields: password
    if (this.formObject.password.length <= 4) {
      this.formError.score++;
      this.formError.password = true;
    }

    // Test mandatory fields: repeatePassword
    if (this.formObject.password != this.formObject.repeatePassword) {
      this.formError.score++;
      this.formError.repeatePassword = true;
    }

    // Test mandatory fields: CGU
    if (!this.formObject.cgu) {
      this.formError.score++;
      this.formError.cgu = true;
    }

    /* FINAL VALIDATION */
    this.formError.score === 0 ? this.sendFormData.emit(this.formObject) : null;
  }

  ngOnInit() {
    // Reset errors when component is loaded
    this.resetFormError()
  }

}
