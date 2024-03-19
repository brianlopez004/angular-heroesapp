import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'heroes-button-back',
  templateUrl: './button-back.component.html',
  styles: ``,
})
export class ButtonBackComponent {
  constructor(private router: Router) {}
  goBack(): void {
    this.router.navigateByUrl('heroes/list');
  }
}
