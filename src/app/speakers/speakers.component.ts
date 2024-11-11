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
      name: 'Speaker 1', 
      position: 'Position 1', 
      image:  'assets/unknown.jpg',
      bio: "bio1" 
    },
    { 
      name: 'Speaker 2', 
      position: 'Position 1', 
      image: 'assets/unknown.jpg',
      bio: "bio1"
     },
    { 
      name: 'Speaker 3', 
      position: 'Position 1', 
      image: 'assets/unknown.jpg',
      bio: "bio1"
     },
    { 
      name: 'Speaker 4', 
      position: 'Position 1', 
      image: 'assets/unknown.jpg',
      bio: "bio1" 
    },
    { name: 'Speaker 5',
      position: 'Position 1', 
      image: 'assets/unknown.jpg',
      bio: "bio1"
    },
    { 
      name: 'Speaker 6', 
      position: 'Position 1', 
      image: 'assets/unknown.jpg',
      bio: "bio1"
    },
    { 
      name: 'Speaker 7', 
      position: 'Position 1', 
      image: 'assets/unknown.jpg',
      bio: "bio1"
    },
    { 
      name: 'Speaker 8', 
      position: 'Position 1', 
      image: 'assets/unknown.jpg',
      bio: "bio1"
    },
    { 
      name: 'Speaker 9', 
      position: 'Position 1', 
      image: 'assets/unknown.jpg',
      bio: "bio1"
    },
    { 
      name: 'Speaker 10', 
      position: 'Position 1', 
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
