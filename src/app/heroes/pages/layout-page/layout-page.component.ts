import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``,
})
export class LayoutPageComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }

  public sidebrItems = [
    {label: 'Listado', icon: 'bx bx-label', url: './list'},
    {label: 'Buscar', icon: 'bx bx-search-alt-2', url: './search'},
    {label: 'Añadir', icon: 'bx bx-folder-plus', url: './new-hero'},
    {label: 'Ajustes', icon: 'bx bx-cog', url: ''},
    {label: 'Saber más', icon: 'bx bx-pointer', url: ''},
  ]
}
