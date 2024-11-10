import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -60; // Offset for any fixed header height
      const yPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({
        top: yPosition,
        behavior: 'smooth' // Ensure smooth scrolling
      });
    }
    this.isMenuOpen = false; // Close menu if open (for mobile view)
  }
}