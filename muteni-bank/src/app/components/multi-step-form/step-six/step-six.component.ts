import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormArray,
  Validators,
} from '@angular/forms';
import { TranslationService } from '../../../services/translation.service';
import { FormDataService } from '../../../services/form-data.service';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../../services/country.service';
import { CheckIconComponent } from '../../check-icon/check-icon.component';

@Component({
  standalone: true,
  selector: 'app-step-six',
  templateUrl: './step-six.component.html',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CheckIconComponent,
  ],
})
export class StepSixComponent {
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();

  form: FormGroup;
  countries: any[] = [];

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private translationService: TranslationService,
    private countryService: CountryService
  ) {
    this.form = this.fb.group({
      fields: this.fb.array([]),
    });

    // Charger les données sauvegardées
    const savedData = this.formDataService.getData('stepSix');
    if (savedData && savedData.fields) {
      this.loadSavedData(savedData);
    } else {
      this.addField(); // Ajouter un champ par défaut si aucune donnée n'est sauvegardée
    }
  }

  ngOnInit(): void {
    this.countryService.getTaxCountries().subscribe((data) => {
      this.countries = data;
    });
  }

  createField(savedData: any = {}): FormGroup {
    return this.fb.group({
      countryOfTaxResidence: [savedData.countryOfTaxResidence || ''],
      NIF: [
        savedData.NIF || '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(/^[0-9]+$/),
        ],
      ],
    });
  }

  get fields(): FormArray {
    return this.form.get('fields') as FormArray;
  }

  addField(savedData: any = {}): void {
    this.fields.push(this.createField(savedData));
  }

  removeField(index: number): void {
    if (this.fields.length > 1) {
      this.fields.removeAt(index);
    }
  }

  loadSavedData(savedData: any): void {
    this.fields.clear();
    savedData.fields.forEach((field: any) => {
      this.addField(field);
    });
  }

  onNext() {
    if (this.form.valid) {
      this.formDataService.setData('stepSix', this.form.value); // Sauvegarde
      this.next.emit(this.form.value); // Envoi des valeurs
    }
  }

  getTranslation(key: string): string {
    return this.translationService.translate(key);
  }

  getCurrentLang(): string {
    return this.translationService.getCurrentLang();
  }
}
