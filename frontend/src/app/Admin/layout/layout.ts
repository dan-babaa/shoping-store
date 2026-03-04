import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar';
import { SidebarComponent } from '../components/sidebar/sidebar';

@Component({
  selector: 'app-layout',
  imports: [ RouterOutlet, NavbarComponent, SidebarComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class LayoutComponent {

  isSidebarOpen = false;
}
