import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {
  totalSteps: number = 5;
  currentStep: number = 1;
  progress: number = 0;

  ngOnInit() {
    this.updateProgressBar();
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      this.updateProgressBar();
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.updateProgressBar();
    }
  }

  updateProgressBar() {
    this.progress = (this.currentStep / this.totalSteps) * 100;
  }
}
