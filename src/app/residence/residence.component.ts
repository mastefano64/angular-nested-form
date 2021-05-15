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

  onSubmit(form: NgForm) {
    this.form = form.value
    const firstname = form.value.firstname;
    const lastname = form.value.lastname;
    const address = form.value.residence.address;
    const province = form.value.residence.province;
    const city = form.value.residence.city;
    const cap = form.value.residence.cap;    
  }
  
}
