import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslationService } from '../../../services/translation.service';
import { FormDataService } from '../../../services/form-data.service';
import { ProgressBarComponent } from '../../progress-bar/progress-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  imports: [ReactiveFormsModule, ProgressBarComponent, CommonModule],
})
export class StepOneComponent {
  @Output() next = new EventEmitter();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private translationService: TranslationService
  ) {
    // Initialise le formulaire avec les données déjà présentes
    const savedData = this.formDataService.getData('stepOne');
    this.form = this.fb.group({
      firstName: [savedData.firstName || '', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ \-']+$/)]], // Ajout des Validators
      lastName: [savedData.lastName || '', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ \-']+$/)]], // Ajout des Validators
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
