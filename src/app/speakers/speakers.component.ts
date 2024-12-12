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
      name: 'Maria Teresa Nieto (Maritere)', 
      position: 'Developer Relations Manager @ Telefonica', 
      image:  'assets/speakers-2025/maritere.jpeg',
      bio: "Maritere es ingeniera informática y cuenta con más de ocho años de experiencia en el campo de la tecnología. Actualmente trabaja como Developer Relations Manager en Telefónica. Durante 2020, Maritere formó parte del Technical Steering Committee de Hyperledger, uno de los consorcios empresariales de blockchain más importantes del ecosistema. Desde 2017, compagina su trabajo principal con la docencia en tecnología blockchain en universidades españolas. María Teresa también está comprometida con la visibilidad de las mujeres en el mundo STEM. Lidera la organización de Women Techmakers Madrid, una comunidad local de una iniciativa de Google. En 2022, fue reconocida por Mujer Hoy en Next Generation, como una mujer para liderar en tecnología." 
    },
    { 
      name: 'Ana Freire', 
      position: 'Ingeniera y Doctora en Informática. Vicedecana en la UPF Barcelona School of Management', 
      image: 'assets/speakers-2025/freire.jpg',
      bio: "Ana Freire, ingeniera y doctora Cum Laude en Informática, es Vicedecana de Impacto Social e Innovación Académica en la UPF Barcelona School of Management (Universitat Pompeu Fabra). Es también miembro del Consejo de Administración de Renfe y asesora en instituciones públicas y privadas. Su experiencia abarca Inteligencia Artificial, Recuperación de Información y Análisis de Redes Sociales. Ha trabajado en prestigiosas instituciones como Yahoo Labs, la Universidad de Glasgow y el Consejo Nacional de Investigaciones de Italia. Ana ha contribuido con más de 50 publicaciones científicas, posee varias patentes y ha sido galardonada con numerosos premios tanto a nivel nacional como internacional. Business Insider la reconoció como una de las 23 españolas más destacadas que lideran la revolución tecnológica. También ha sido distinguida con el Premio al Talento Joven en Ciencia Femenino de la Real Academia de Ciencias de España, así como con el Premio Ada Byron Junior de la Universidad de Deusto. Desde 2016, Ana lidera STOP, un proyecto multidisciplinar centrado en abordar problemas de salud mental a través del análisis de redes sociales, reflejando su compromiso con el uso de la ciencia de datos para el bienestar social. Su pasión por la ciencia y la tecnología también se refleja en sus ponencias públicas, incluidas una charla TEDx en la que explora la relación entre la tecnología y la salud mental."
     },
    { 
      name: 'Jorge del Casar', 
      position: 'Head of Tech en ActioGlobal', 
      image: 'assets/speakers-2025/jorge.jpeg',
      bio: "Llevo años liderando equipos de desarrollo de software y trabajando como consultor tecnológico para grandes compañías. Google ha reconocido mi aporte a la comunidad tecnológica otorgándome los galardones de Google Developer Expert (#GDE) en Web Technologies y Assistant (#AoGdevs)"
     },
    { 
      name: 'Cristina Maria Pereira dos Santos', 
      position: 'Professora Titular i Vicedegana d’Afers Acadèmics i de Qualitat de la Facultat de Biociències', 
      image: 'assets/speakers-2025/cristina.png',
      bio: "Soc Biòloga per la Universitat de Coimbra i doctora en Antropologia Biològica per la Universitat Autònoma de Barcelona amb especialització en Genètica de poblacions humanes i evolució molecular. Actualment sóc Professora Titular de la Unitat d’Antropologia Biològica de la Universitat Autònoma de Barcelona i Vicedegana d’Afers Acadèmics i de Qualitat de la Facultat de Biociències. Fins fa menys d’un any he estat Coordinadora del Grau en Biologia de la Universitat Autònoma de Barcelona i també he coordinat el màster interuniversitari (UAB/UB) d’Antropologia Biològica." 
    },
    { name: 'Gabriel Moyà Alcover',
      position: 'professor de la UIB de la Unitat de Gràfics i Visió en el Departament de Matemàtiques i Informàtica', 
      image: 'assets/speakers-2025/biel.jpg',
      bio: "Som en Gabriel Moyà Alcover, professor de la UIB de la Unitat de Gràfics i Visió en el Departament de Matemàtiques i Informàtica i un amic del llenguatge Python de fa més de 12 anys. A més de la meva tasca docent en assignatures com Programació I, Intel·ligència Artificial i Aprenentatge Automàtic, faig algunes feines de recerca emprant la IA per tasques d’anàlisi d’imatges sobretot en l’àmbit mèdic, darrerament també estic ajudant a la recerca en Intel·ligència Artificial eXplicable i estic participant en projectes de transferència de coneixement cap a la societat"
    },
    { 
      name: 'Ernest Teniente', 
      position: 'Director inLab FIB', 
      image: 'assets/speakers-2025/ernest.jpg',
      bio: "L'Ernest Teniente és Catedràtic del Departament d'Enginyeria de Serveis i Sistemes d'Informació (ESSI) de la Universitat Politècnica de Catalunya (UPC). Actualment, és el Director de l'inLab FIB (el laboratori d'innovació i recerca de la Facultat d'Informàtica de Barcelona), President de SISTEDES (Sociedad española de Ingeniería del Software y Tecnologías de Desarrollo de Software) i membre de la Junta Directiva de la SCIE (Sociedad Científica Informática de España). També va ser investigador visitant al Politecnico di Milano i a la Universitá di Roma Tre, a Itàlia."
    },
    { 
      name: 'Nerea Luis', 
      position: 'Cofundadora de @wearlumilabs y doctora en Inteligencia Artificial', 
      image: 'assets/speakers-2025/nerea.jpg',
      bio: "Nerea Luis es consultora y asesora freelance en Inteligencia Artificial. Recientemente ha cofundado Lumi Labs, donde pretende acercar la IA a las organizaciones de una forma cercana, realista y segura. De formación Doctora en Ciencias de la Computación, con 10 años de experiencia en el campo, ha liderado la dirección de proyectos relacionados con Procesamiento del Lenguaje Natural y Visión Artificial. En su última etapa, en Sngular, llegó a ser la directora del equipo de Inteligencia Artificial. Durante estos años ha recibido reconocimientos de Google, Casa Real o Forbes, entre otros. Nerea es una conocida divulgadora en el campo de la Inteligencia Artificial, lleva tres temporadas colaborando con el programa de TV Órbita Laika en la nueva sección de tecnología y recientemente en Cuerpos Especiales en EuropaFM. También es habitual speaker en conferencias e imparte docencia y formación en diferentes escuelas técnicas y de negocio."
    },
    { 
      name: 'Albert Solana', 
      position: 'co-founder Mindsight Ventures', 
      image: 'assets/speakers-2025/albert.jpeg',
      bio: "Albert Solana és technology leader i AI strategist, cofundador de Mindsight Ventures i AI Advisor del venture builder. Amb una expertesa en sistemes d'IA de múltiples agents i una sòlida formació en enginyeria quàntica i ciència de dades, impulsa solucions innovadores en l'optimització empresarial basada en IA i en tecnologia sostenible. L'Albert ha contribuït a projectes avançats en computació quàntica i transformació digital, aprofitant la seva experiència al MIT i en prestigioses empreses tecnològiques globals."
    },
    { 
      name: 'Ana Palacios', 
      position: 'Quantum Software Engineer en Qilimanjaro Quantum Tech', 
      image: 'assets/speakers-2025/palacios.png',
      bio: "Ana Palacios estudió Física en la Universidad Complutense de Madrid. Acabó la carrera enamorada de la cuántica pero con curiosidad por profundizar en transiciones de fase, teoría de la información y en computación, por lo que realizó el máster en Física de los Sistemas Complejos del Instituto de Física Interdisciplinar y de los Sistemas Complejos (IFISC) y la Universidad de las Islas Baleares (UIB). Actualmente está haciendo un doctorado industrial con Qilimanjaro en la Universidad de Barcelona sobre el modelo analógico de computación cuántica, desarrollando tanto la teoría fundamental como aplicaciones dentro de este paradigma."
    },
    { 
      name: 'Santiago Barro Caules', 
      position: 'Fundador y Gerente de Binary Menorca S.L.', 
      image: 'assets/speakers-2025/tiago.jpg',
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
