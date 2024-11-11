import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})

export class SpeakersComponent {
  speakers = [
    { 
      name: '¿Sabes', 
      position: 'Quienes', 
      image:  'assets/unknown.jpg',
      bio: "bio1" 
    },
    { 
      name: 'Son', 
      position: 'Los', 
      image: 'assets/unknown.jpg',
      bio: "bio1"
     },
    { 
      name: 'Ponentes', 
      position: 'del', 
      image: 'assets/unknown.jpg',
      bio: "bio1"
     },
    { 
      name: 'STEM', 
      position: 'Talks', 
      image: 'assets/unknown.jpg',
      bio: "bio1" 
    },
    { name: 'Menorca',
      position: '2025?', 
      image: 'assets/unknown.jpg',
      bio: "bio1"
    },
    { 
      name: 'Nosotros', 
      position: 'Si', 
      image: 'assets/unknown.jpg',
      bio: "bio1"
    },
    { 
      name: 'Pero', 
      position: 'Aún', 
      image: 'assets/unknown.jpg',
      bio: "bio1"
    },
    { 
      name: 'es', 
      position: 'Pronto', 
      image: 'assets/unknown.jpg',
      bio: "bio1"
    },
    { 
      name: 'Para', 
      position: 'Ti', 
      image: 'assets/unknown.jpg',
      bio: "bio1"
    },
    { 
      name: 'Ten', 
      position: 'Paciencia ;)', 
      image: 'assets/unknown.jpg',
      bio: "bio1" 
    },
  ];

  selectedSpeaker: any = null;

  openModal(speaker: any) {
    this.selectedSpeaker = speaker; // Set the selected speaker to show in the modal
  }

  closeModal() {
    this.selectedSpeaker = null; // Close the modal
  }

}
