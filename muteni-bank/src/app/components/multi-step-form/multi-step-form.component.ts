import { Component } from '@angular/core';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { FormDataService } from '../../services/form-data.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  imports: [StepOneComponent, StepTwoComponent, CommonModule],
})
export class MultiStepFormComponent {
  currentStep = 1;
  formData: any = {};

  constructor(private formDataService: FormDataService) {}

  goToNext() {
    this.currentStep++;
  }

  goToPrevious() {
    this.currentStep--;
  }

  finish() {
    this.formData = this.formDataService.getAllData(); // Récupère toutes les données
    this.currentStep++;
  }

  restart() {
    this.formDataService.resetData(); // Réinitialise les données
    this.currentStep = 1;
  }
}
