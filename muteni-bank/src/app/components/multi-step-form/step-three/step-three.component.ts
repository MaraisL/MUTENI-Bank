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
import { SvgIconComponent } from '../../check-icon/check-icon.component';

@Component({
  standalone: true,
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ProgressBarComponent,
    SvgIconComponent,
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
      defunctFirstName: [
        savedData.defunctFirstName || '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ \-']+$/),
        ],
      ],
      defunctLastName: [
        savedData.defunctLastName || '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ \-']+$/),
        ],
      ],
      defunctBirthdate: [
        savedData.defunctBirthdate || '',
        [
          Validators.required,
          Validators.pattern(
            /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
          ),
        ],
      ],
      defunctClientNumber: [
        savedData.defunctClientNumber || '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(/^[0-9]+$/),
        ],
      ],
    });
  }

  onNext() {
    if (this.form.valid) {
      this.formDataService.setData('stepThree', this.form.value); // Sauvegarde
      this.next.emit();
    }
  }

  getTranslation(key: string): string {
    return this.translationService.translate(key);
  }
}
