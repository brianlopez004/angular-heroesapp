import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404-page',
  templateUrl: './error404-page.component.html',
  styles: ``,
})
export class Error404PageComponent {

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigateByUrl('heroes/list');
  }
}
