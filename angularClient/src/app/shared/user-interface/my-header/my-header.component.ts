/* IMPORTS */
import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";


/* DEFINITION */
@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html'
})


/* EXPORT */
export class MyHeaderComponent implements OnInit {

  // The @Input() decorator enables data input from the main component to the component
  @Input() path: string;
  @Input() headerTitle: string;

  constructor( private router: Router ) { }

  ngOnInit() { }
}
