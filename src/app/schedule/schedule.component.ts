import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedule = [
    {
      day: 'Jueves 30 (tarde)',
      talks: [
        {
          time: '17:15',
          title: 'Talk 1: TBA',
          speaker: 'Speaker: TBA',
          summary: 'Not yet...',
        },
        {
          time: '18:05',
          title: 'Talk 2: TBA',
          speaker: 'Speaker: TBA',
          summary: 'Sabemos que quieres saberlo...',
        },
        {
          time: '18:55',
          title: 'Talk 3: TBA',
          speaker: 'Speaker: TBA',
          summary: 'Pero aún es pronto ;)',
        },
      ],
      isOpen: [false, false]  // Track the open state for each talk in this day
    },
    {
      day: 'Viernes 31 (mañana)',
      talks: [
        {
          time: '10:00',
          title: 'Talk 4: TBA',
          speaker: 'Speaker: TBA',
          summary: 'Tampoco encontrarás nada aquí...',
        },
        {
          time: '10:30',
          title: 'Talk 5: TBA',
          speaker: 'Speaker: TBA',
          summary: 'No insistas...',
        },
        {
          time: '11:00',
          title: 'Descanso y desayuno',
          speaker: '',
          summary: 'Se ofrecerá desayuno a los asistentes',
        },
        {
          time: '11:20',
          title: 'Talk 6: TBA',
          speaker: 'Speaker: TBA',
          summary: 'No habrá filtraciones antes de tiempo...',
        },
        {
          time: '11:50',
          title: 'Talk 7: TBA',
          speaker: 'Speaker: TBA',
          summary: 'Pero estamos contentos que tengas tantas ganas de saber de que irán las ponencias :D',
        },
      ],
      isOpen: [false, false]  // Track the open state for each talk in this day
    },
    {
      day: 'Viernes 31 (tarde)',
      talks: [
        {
          time: '17:15',
          title: 'Talk 8: TBA',
          speaker: 'Speaker: TBA',
          summary: '¡Hola de nuevo! Como puedes ver aún no hemos anunciado a charla :D',
        },
        {
          time: '18:05',
          title: 'Talk 9: TBA',
          speaker: 'Speaker: TBA',
          summary: 'La paciencia es la madre de la ciencia...',
        },
        {
          time: '18:55',
          title: 'Talk 10: TBA',
          speaker: 'Speaker: TBA',
          summary: 'A poquet a poquet, es fa es caminet!',
        },
        {
          time: '19:40',
          title: 'Talk Especial: TBA',
          speaker: 'Speaker: TBA',
          summary: '¡Solo podemos decirte que el final te va a dejar con la boca abierta!',
        },
      ],
      isOpen: [false, false]  // Track the open state for each talk in this day
    }
  ];

  ngOnInit() {
    // Initialization logic if needed
  }

  toggleSummary(dayIndex: number, talkIndex: number): void {
    // Toggle the specific talk summary based on its day and index
    this.schedule[dayIndex].isOpen[talkIndex] = !this.schedule[dayIndex].isOpen[talkIndex];
  }
}