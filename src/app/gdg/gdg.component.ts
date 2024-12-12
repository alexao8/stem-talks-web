import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gdg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gdg.component.html',
  styleUrls: ['./gdg.component.css']
})
export class GdgComponent {
  // Modal state
  isModalOpen: boolean = false;
  selectedPerson: any = null;

  // Team members data
  teamMembers = [
    {
      name: 'Alexandre Alemany Orfila',
      position: 'Student data scientist en Saxo Bank',
      pic: 'assets/organizers/Alex.jpg',
      bio: 'Me llamo Alex, soy organizador de GDG Menorca desde su creación en 2015. Lo que más me define debe ser organizar eventos :D \n Pero además, soy informático por la Universitat Politècnica de Catalunya y actualmente estudio un master en Quantum Information Science en Copenhague. También trabajo como student data scientist en Saxo Bank.'
    },
    {
      name: 'Sergi Olives Orfila',
      position: 'Team Lead & Scrum Master en Merkle',
      pic: 'assets/organizers/Sergi.jpg',
      bio: 'Soy Sergi, organizador de GDG Menorca desde julio del 2024, desarrollador de aplicaciones web y personas, y amante de la tecnología y como la usamos para resolver problemas del día a día.'
    }
  ];

  // Open modal with selected person's info
  openModal(index: number) {
    this.selectedPerson = this.teamMembers[index];
    this.isModalOpen = true;
  }

  // Close modal
  closeModal() {
    this.isModalOpen = false;
    this.selectedPerson = null;
  }
}