import { Component } from '@angular/core';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss'],
})
export class AlarmComponent {
  showImage: boolean = false;
  image_label = 'Imagen';

  timesPerDay: number = 1;
  frequency: string = 'Repetir cada 3 horas';
  reminderTime: string = '5 minutos';

  medicationName: string = 'Acetaminofén';
  dosage: string = '2 tabletas';
  time: string = '12:00 PM';
  selectedDays: boolean[] = [true, false, false, true, false, false, true];
  circleState: boolean[] = Array(12)
    .fill(false)
    .map((_, index) => index === 9 || index === 0);

  toggleDay(index: number): void {
    this.selectedDays[index] = !this.selectedDays[index];
  }

  toggleCircle(index: number): void {
    this.circleState[index] = !this.circleState[index];
  }

  toggleAmPm(): void {
    const parts = this.time.split(' ');
    parts[1] = parts[1] === 'AM' ? 'PM' : 'AM';
    this.time = parts.join(' ');
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
    this.image_label = this.showImage ? 'Horario' : 'Imagen';
  }
}
