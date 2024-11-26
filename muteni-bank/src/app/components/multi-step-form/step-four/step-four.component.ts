import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslationService } from '../../../services/translation.service';
import { FormDataService } from '../../../services/form-data.service';
import { ProgressBarComponent } from '../../progress-bar/progress-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  imports: [ReactiveFormsModule, ProgressBarComponent, CommonModule],
})
export class StepFourComponent {
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter<void>();

  form: FormGroup;

  isResidentFrance: boolean = true; // Valeur initiale pour le premier switch
  isResidentOtherCountry: boolean = false; // Valeur initiale pour le deuxième switch
  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private translationService: TranslationService
  ) {
    // Init form
    const savedData = this.formDataService.getData('stepFour');
    this.form = this.fb.group({
      isResidentFrance: [savedData.isResidentFrance || ''],
      isResidentOtherCountry: [savedData.isResidentOtherCountry || ''],
    });
  }

  getTranslation(key: string): string {
    return this.translationService.translate(key);
  }

  onNext() {
    if (this.form.valid) {
      this.formDataService.setData('stepFour', this.form.value); // Save
      // console.log(this.form.value);
      this.next.emit(this.form.value); // Send value
    }
  }
}
