import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslationService } from '../../../services/translation.service';

import { FormDataService } from '../../../services/form-data.service';
import { ProgressBarComponent } from '../../progress-bar/progress-bar.component';

@Component({
  standalone: true,
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  imports: [ReactiveFormsModule, ProgressBarComponent],
})
export class StepOneComponent {
  @Output() next = new EventEmitter<void>();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private translationService: TranslationService
  ) {
    // Initialise le formulaire avec les données déjà présentes
    const savedData = this.formDataService.getData('stepOne');
    this.form = this.fb.group({
      name: [savedData.name || ''], // Valeur par défaut ou récupérée
    });
  }

  getTranslation(key: string): string {
    return this.translationService.translate(key);
  }

  onNext() {
    if (this.form.valid) {
      this.formDataService.setData('stepOne', this.form.value); // Sauvegarde
      this.next.emit();
    }
  }
}
