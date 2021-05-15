import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  form: NgForm;

  constructor() { }

  onSubmit(form: NgForm) {
    this.form = form.value
    const firstname = form.value.firstname;
    const lastname = form.value.lastname;
    const address = form.value.address;
    const province = form.value.province;
    const city = form.value.city;
    const cap = form.value.cap;    
  }
  
}
