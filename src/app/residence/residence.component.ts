import { Component } from '@angular/core';

import { NgForm, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class Residence2Component {
  form: NgForm;

  constructor() { }
  
}
