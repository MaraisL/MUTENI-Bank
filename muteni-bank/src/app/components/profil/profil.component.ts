import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [],
  templateUrl: './profil.component.html',
})
export class ProfilComponent {
  constructor(
    private translationService: TranslationService,
    private router: Router
  ) {}

  getTranslation(key: string): string {
    return this.translationService.translate(key);
  }

  goToMultiStepForm() {
    this.router.navigate(['/facta-aeoi-form']);
  }
}
