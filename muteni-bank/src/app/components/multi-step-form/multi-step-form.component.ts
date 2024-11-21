import { Component } from '@angular/core';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { FormDataService } from '../../services/form-data.service';
import { CommonModule } from '@angular/common';
import { StepThreeComponent } from './step-three/step-three.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  standalone: true,
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  imports: [
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    CommonModule,
    BreadcrumbComponent,
  ],
})
export class MultiStepFormComponent {
  steps = [
    'FORM_STEP_1_BREADCRUMB',
    'FORM_STEP_2_BREADCRUMB',
    'FORM_STEP_3_BREADCRUMB',
  ];

  currentStep = 0;
  formData: any = {};

  constructor(
    private formDataService: FormDataService,
    private translationService: TranslationService
  ) {}

  goToNext() {
    this.currentStep++;
  }

  goToPrevious() {
    this.currentStep--;
  }
  goToStep(step: number) {
    if (step < this.currentStep) {
      this.currentStep = step;
    }
  }

  finish() {
    this.formData = this.formDataService.getAllData(); //Get data
    this.currentStep++;
  }

  restart() {
    this.formDataService.resetData(); // Reset data
    this.currentStep = 1;
  }

  onNextStep(data: any) {
    this.formData['stepOne'] = data; // Save data
    this.goToNext();
  }

  getTranslation(key: string): string {
    return this.translationService.translate(key);
  }
}
