import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
import { ProgressBarComponent } from '../../progress-bar/progress-bar.component';
import { CommonModule } from '@angular/common';
import { FormDataService } from '../../../services/form-data.service';

@Component({
  selector: 'app-step-summary',
  standalone: true,
  imports: [ProgressBarComponent, CommonModule],
  templateUrl: './step-summary.component.html',
})
export class StepSummaryComponent implements OnInit {
  @Output() goTo = new EventEmitter<number>();
  @Output() previous = new EventEmitter<void>();

  formData: any = {};

  constructor(
    private formDataService: FormDataService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    // Load form data from service
    this.formData = this.formDataService.getAllData();
    console.debug('Get summary form data', this.formData);
  }

  getTranslation(key: string): string {
    return this.translationService.translate(key);
  }
}
