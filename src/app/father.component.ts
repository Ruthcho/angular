import { ChildComponent } from './child.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-father',
  standalone: true,
    imports: [ChildComponent],
    templateUrl: './father.component.html',
    styleUrls: ['./father.component.css']})
export class DirectionComponent {
    message: string = '';
    onTimerStopped(seconds: number) {
        this.message = `Timer stopped at ${seconds} seconds.`;
    }
}