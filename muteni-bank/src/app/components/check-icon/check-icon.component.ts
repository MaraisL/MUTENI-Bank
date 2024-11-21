import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-check-icon',
  templateUrl: './check-icon.component.html',
  imports: [CommonModule],
})
export class CheckIconComponent {
  @Input() color: string = '#22c55e';
}
