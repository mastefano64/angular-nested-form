import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private router: Router) { }

  onGoPage1() {
    this.router.navigate(['/page1']);
  }

  onGoPage2() {
    this.router.navigate(['/page2']);
  }

  onGoPage3() {
    this.router.navigate(['/page3']);
  }

  onGoPage4() {
    this.router.navigate(['/page4']);
  }


}
