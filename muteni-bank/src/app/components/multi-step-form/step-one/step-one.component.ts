import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslationService } from '../../../services/translation.service';
import { FormDataService } from '../../../services/form-data.service';
import { CommonModule } from '@angular/common';
import { CheckIconComponent } from '../../check-icon/check-icon.component';

@Component({
  standalone: true,
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CheckIconComponent,
  ],
})
export class StepOneComponent {
  @Output() next = new EventEmitter();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private translationService: TranslationService
  ) {
    // Init form
    const savedData = this.formDataService.getData('stepOne');
    this.form = this.fb.group({
      beneficiaryFirstName: [
        savedData.beneficiaryFirstName || '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ \-']+$/),
        ],
      ],
      beneficiaryLastName: [
        savedData.beneficiaryLastName || '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ \-']+$/),
        ],
      ],
    });
  }

  getTranslation(key: string): string {
    return this.translationService.translate(key);
  }

  onNext() {
    if (this.form.valid) {
      this.formDataService.setData('stepOne', this.form.value); // Save
      // console.log(this.form.value);
      this.next.emit(this.form.value); // Send value
    }
  }
}
