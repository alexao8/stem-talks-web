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
      day: 'Thursday 30th (afternoon)',
      talks: [
        {
          time: '2:00 PM',
          title: 'Talk 1',
          speaker: 'Speaker 1',
          summary: 'Summary of the first talk...',
        },
        {
          time: '3:00 PM',
          title: 'Talk 2',
          speaker: 'Speaker 2',
          summary: 'Summary of the second talk...',
        },
      ],
      isOpen: [false, false]  // Track the open state for each talk in this day
    },
    {
      day: 'Friday 31st (morning)',
      talks: [
        {
          time: '9:00 AM',
          title: 'Talk 3',
          speaker: 'Speaker 3',
          summary: 'Summary of the third talk...',
        },
        {
          time: '10:00 AM',
          title: 'Talk 4',
          speaker: 'Speaker 4',
          summary: 'Summary of the fourth talk...',
        },
      ],
      isOpen: [false, false]  // Track the open state for each talk in this day
    },
    {
      day: 'Friday 31st (afternoon)',
      talks: [
        {
          time: '1:00 PM',
          title: 'Talk 5',
          speaker: 'Speaker 5',
          summary: 'Summary of the fifth talk...',
        },
        {
          time: '2:30 PM',
          title: 'Talk 6',
          speaker: 'Speaker 6',
          summary: 'Summary of the sixth talk...',
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