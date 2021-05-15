import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'] 
})
export class Page3Component {  
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
