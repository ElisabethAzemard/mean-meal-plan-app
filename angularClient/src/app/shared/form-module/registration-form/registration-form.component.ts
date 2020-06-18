/* IMPORTS */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserModel } from "../../../models/user.model";


/* DEFINITION */
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})


/* EXPORT */
// export class RegistrationFormComponent implements OnInit {
//   @Input() formObject: UserModel;

//   // The @Output() decorator enable component to send data to main component with an event
//   @Output() sendFormData = new EventEmitter();

//   // Create a varible to toggle the form
//   // public formIsOpen: Boolean = false;

//   // Create an object for errors
//   public formError;

//   public formData: FormGroup;
//   @Output() formSubmit = new EventEmitter();

//   constructor(private FormBuilder: FormBuilder) { }

//   // Create a function to reset form error
//   private resetFormError = () => {
//     this.formError = {
//       score: 0,
//       firstName: false,
//       lastName: false,
//       email: false,
//       password: false,
//       repeatpassword: false,
//       cgu: false
//     };

//     this.formData = this.FormBuilder.group({
//       firstName: [null, Validators.required],
//       lastName: [null, Validators.required],
//       email: [null, Validators.required],
//       password: [null, Validators.required],
//       repeatpassword: [null, Validators.required],
//     });
//   }

//   // Create a function to manipulate checkbox
//   // public checkConditions = () => {
//   //   // Invert value
//   //   this.formObject.cgu = !this.formObject.cgu;

//   //   // Hide error
//   //   this.formError.cgu = false;
//   // }

//   // Creta a function for the form submission
//   // public formSubmission = () => {
//   //   // Reset errors
//   //   this.resetFormError()

//   //   // Test mandatory fields: firstName
//   //   if (this.formObject.firstName.length <= 1) {
//   //     this.formError.score++;
//   //     this.formError.firstName = true;
//   //   }

//   //   // Test mandatory fields: lastName
//   //   if (this.formObject.lastName.length <= 1) {
//   //     this.formError.score++;
//   //     this.formError.lastName = true;
//   //   }

//   //   // Test mandatory fields: email
//   //   if (this.formObject.email.length <= 1) {
//   //     this.formError.score++;
//   //     this.formError.email = true;
//   //   }

//   //   // Test mandatory fields: password
//   //   if (this.formObject.password.length <= 4) {
//   //     this.formError.score++;
//   //     this.formError.password = true;
//   //   }

//   //   // Test mandatory fields: repeatpassword
//   //   if (this.formObject.password != this.formObject.repeatpassword) {
//   //     this.formError.score++;
//   //     this.formError.repeatpassword = true;
//   //   }

//   //   // Test mandatory fields: CGU
//   //   if (!this.formObject.cgu) {
//   //     this.formError.score++;
//   //     this.formError.cgu = true;
//   //   }

//   //   /* FINAL VALIDATION */
//   //   this.formError.score === 0 ? this.sendFormData.emit(this.formObject) : null;
//   // }

//   ngOnInit() {
//     // Reset errors when component is loaded
//     this.resetFormError()
//   }

// }

export class RegistrationFormComponent implements OnInit {
  // Declarations
  public formData: FormGroup;
  @Output() formSubmit = new EventEmitter();

  // Inject FormBuilder
  constructor(private FormBuilder: FormBuilder) { }

  // Method to reset form
  private resetForm = () => {
    this.formData = this.FormBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      repeatpassword: [null, Validators.required]
    });
  };

  // Start
  ngOnInit() {
    this.resetForm();
  }
}
