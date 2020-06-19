/* IMPORTS */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserModel } from "../../../models/user.model";


/* DEFINITION & EXPORT */
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  // Declarations
  public formData: FormGroup;
  @Output() formSubmit = new EventEmitter();
  @Output() alreadyRegistered = new EventEmitter();

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
