import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.setLeftColumnHeight();
    window.addEventListener('resize', this.setLeftColumnHeight); // Update on window resize
  }

  private setLeftColumnHeight = () => {
    const mapHeight = document.querySelector('.right-column')?.clientHeight || 0;
    const leftColumn = document.querySelector('.left-column') as HTMLElement; // Cast to HTMLElement
    if (leftColumn) {
      leftColumn.style.height = `${mapHeight}px`; // Now we can access the style property
    }
  }

}