import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  // Просто добавляй новый объект в массив, когда готова новая лаба
  projects = [
    {
      title: 'ZnS Crystal Visualizer',
      desc: 'Визуализация кристаллической решетки сульфида цинка (сфалерит/вюрцит).',
      url: 'https://max1muth.github.io/cryst_ang.04/',
      tech: ['Three.js', 'Angular']
    },
    {
      title: 'Crystallography Lab #1',
      desc: 'Работа с индексами Миллера и сеткой Вульфа.',
      url: '#', 
      tech: ['Math', 'SVG']
    }
  ];
}