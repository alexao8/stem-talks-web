import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap">
  <div class="title">
    <h1> Divulgación STEM en comunidad </h1>
  </div>
  <div class="container">
    <div class="column video-column">
      <!-- YouTube video embedded as an iframe -->
      <iframe width="560" height="315" src="https://www.youtube.com/embed/yko9WGk6EJ8?si=le5CkfXlNVwSWZUx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="column text-column">
      <p>
        El 30 y 31 de enero nos volvemos a ver en el Centre Bit Menorca para celebrar el STEM Talks Menorca. Un evento relacionado con el mundo STEM (Science, Technology, Engineering, Mathematics) con el objetivo de la divulgación científico-técnica y que se encuentra en su 8a edición. siete ediciones dedicadas a unas jornadas con la ciencia y la tecnología como protagonista preceden la de este año donde nos podremos volver a juntar en comunidad. Un evento de dos días, 30 y 31 de enero, donde volveremos a vernos y disfrutaremos de conferencias de grandes profesionales en la tecnología y la ciencia dirigidas a cualquier interesado en la materia con un objetivo claro: aprender en comunidad.
      </p>
      <p>
        STEM Talks Menorca es un evento totalmente gratuito e inclusivo que te acercará a cuestiones actuales de la tecnología dadas por grandes exponentes que vienen de diferentes puntos de España y que son expertos en sus campos. Temas como inteligencia artificial, computación cuántica, realidad virtual, biociencias... Diferentes ponentes de instituciones tanto públicas como privadas nos llevarán un evento de calidad que se podrá disfrutar en versión híbrida  tanto en directo desde youtube como presencial desde el Centre Bit Menorca.
      </p>
    </div>
  </div>

  <div class="countdown">
  <p>{{ days }}d {{ hours }}h {{ minutes }}m {{ seconds }}s para el STEM Talks Menorca</p> 
  </div>
  `,
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // Set the event date and time
  targetDate: Date = new Date('2025-01-30T17:00:00'); // Change to your event date

  // Countdown variables
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit() {
    this.startCountdown();
  }

  // Method to initialize the countdown
  startCountdown() {
    setInterval(() => {
      const now = new Date().getTime();
      const distance = this.targetDate.getTime() - now;

      if (distance > 0) {
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      } else {
        this.days = this.hours = this.minutes = this.seconds = 0; // Reset to zero when the countdown ends
      }
    }, 1000); // Update every second
  }
}