import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormDataService } from '../../../services/form-data.service';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../services/translation.service';
import { ProgressBarComponent } from '../../progress-bar/progress-bar.component';
import { CheckIconComponent } from '../../check-icon/check-icon.component';

@Component({
  standalone: true,
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ProgressBarComponent,
    CheckIconComponent,
  ],
})
export class StepThreeComponent {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private translationService: TranslationService
  ) {
    const savedData = this.formDataService.getData('stepThree');
    this.form = this.fb.group({
      personalLastName: [
        savedData.personalLastName || '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ \-']+$/),
        ],
      ],
      personalUsualName: [
        savedData.personalFirstName || '',
        [
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ \-']+$/),
        ],
      ],
      personalFirstName: [
        savedData.personalFirstName || '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ \-']+$/),
        ],
      ],
      personalBirthDate: [
        savedData.personalBirthDate || '',
        [
          Validators.required,
          Validators.pattern(
            /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
          ),
        ],
      ],
      personalBirthCity: [
        savedData.personalBirthCity || '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ \-']+$/),
        ],
      ],
      personalBirthCountry: [
        savedData.personalBirthCountry || '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ \-']+$/),
        ],
      ],
      homeAddress: [
        savedData.homeAddress || '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(/^[A-Za-zÀ-ÿ0-9\s'-]+$/),
        ],
      ],
      homeAdditionalAddress: [
        savedData.homeAdditionalAddress || '',
        [Validators.maxLength(50), Validators.pattern(/^[A-Za-zÀ-ÿ0-9\s'-]+$/)],
      ],
      homeZIP: [
        savedData.homeZIP || '',
        [Validators.required, Validators.pattern(/^\d{5}$/)],
      ],
      homeCity: [
        savedData.homeCity || '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ \-']+$/),
        ],
      ],
      homeCountry: [
        savedData.homeCountry || '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ \-']+$/),
        ],
      ],
    });
  }

  onNext() {
    if (this.form.valid) {
      this.formDataService.setData('stepThree', this.form.value);
      this.next.emit();
    }
  }

  getTranslation(key: string): string {
    return this.translationService.translate(key);
  }
}
