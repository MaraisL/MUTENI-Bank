import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslationService } from '../../../services/translation.service';
import { FormDataService } from '../../../services/form-data.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  imports: [ReactiveFormsModule, CommonModule],
})
export class StepFiveComponent {
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter<void>();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private translationService: TranslationService
  ) {
    // Init form
    const savedData = this.formDataService.getData('stepFive');
    this.form = this.fb.group({
      isResidentUS: [savedData.isResidentUS || false],
      isUSCitizen: [savedData.isUSCitizen || false],
    });
  }

  getTranslation(key: string): string {
    return this.translationService.translate(key);
  }

  onNext() {
    if (this.form.valid) {
      this.formDataService.setData('stepFive', this.form.value); // Save
      // console.log(this.form.value);
      this.next.emit(this.form.value); // Send value
    }
  }
}
