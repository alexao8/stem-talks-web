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
      bio: 'Team Lead de un equipo de desarrollo web para Sky TV. \n Amante del baloncesto.'
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