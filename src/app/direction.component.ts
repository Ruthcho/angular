import { Component } from '@angular/core';
import { Test } from './item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './direction.component.html',
  styleUrl: './direction.component.css'
})
export class DirectionComponent {
  test: Test[] = [
    { subject: 'מקצוע 1', score: 50 },
    { subject: 'מקצוע 2', score: 60 },
    { subject: 'מקצוע 3', score: 70 },
    { subject: 'מקצוע 4', score: 80 },
    { subject: 'מקצוע 5', score: 69 }
  ];

  get average(): number {
    if (this.test.length === 0) return 0;
    const sum = this.test.reduce((acc, t) => acc + t.score, 0);
    return Math.round(sum / this.test.length);
  }
}
