import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    seconds: number = 0;
    timer : any;
    startTimer() {
    this.timer = setInterval(() => {
        this.seconds++;
    }, 1000);
}
 @Output() timerStopped = new EventEmitter<number>();
stopTimer() {
    clearInterval(this.timer);
    this.timerStopped.emit(this.seconds);
}
}

