import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-entradas',
  standalone: true,
  template: `
    <div class="ticket-button-container">
      <a href="https://www.eventbrite.es/e/entradas-stem-talks-menorca-2025-1105345360729?aff=oddtdtcreator" target="_blank" class="ticket-button">
        ¡SOLICITA TU ENTRADA GRATUITA PARA ENTRAR EN EL SORTEO DE PRODUCTOS DE GOOGLE!
      </a>
    </div>
  `,
  styleUrls: ['./boton-entradas.component.css']
})
export class BotonEntradasComponent {} 