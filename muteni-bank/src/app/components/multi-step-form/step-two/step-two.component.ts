import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormDataService } from '../../../services/form-data.service';

@Component({
  standalone: true,
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  imports: [ReactiveFormsModule],
})
export class StepTwoComponent {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService
  ) {
    const savedData = this.formDataService.getData('stepTwo');
    this.form = this.fb.group({
      email: [savedData.email || ''],
    });
  }

  onNext() {
    if (this.form.valid) {
      this.formDataService.setData('stepTwo', this.form.value); // Sauvegarde
      this.next.emit();
    }
  }
}
