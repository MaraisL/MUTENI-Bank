import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  standalone: true,
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  imports: [CommonModule],
})
export class BreadcrumbComponent {
  @Input() steps: string[] = [];
  @Input() currentStep: number = 0;
  @Output() stepClicked = new EventEmitter<number>();

  constructor(private translationService: TranslationService) {}

  onStepClick(index: number) {
    if (index < this.currentStep) {
      this.stepClicked.emit(index);
    }
  }

  getTranslation(key: string): string {
    return this.translationService.translate(key);
  }
}
