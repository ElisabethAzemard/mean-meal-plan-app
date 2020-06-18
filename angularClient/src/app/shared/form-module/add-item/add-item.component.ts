/* IMPORTS */
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


/* DEFINITION & EXPORT */
@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

    // PROPERTIES
    public formData: FormGroup;
    @Output() addItem = new EventEmitter();
    faCheck = faCheck;


    // DEPENDENCIES INJECTION
    constructor(private FormBuilder: FormBuilder) { }


    // METHODS
    // reset form
    private resetForm = () => {
        this.formData = this.FormBuilder.group({
            name: [null, Validators.required],
        });
    };


    // LIFECYCLE HOOKS
    ngOnInit() {
        this.resetForm();
    }

}
