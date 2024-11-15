import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [],
  templateUrl: './profil.component.html',
})
export class ProfilComponent implements OnInit {
  constructor(
    private translationService: TranslationService,
    private router: Router
  ) {}

  // TODO : REFACTO DUPLICATE CODE
  ngOnInit() {
    this.translationService.loadTranslations('fr').subscribe();
  }

  switchLanguage(language: string) {
    this.translationService.loadTranslations(language).subscribe();
  }

  getTranslation(key: string): string {
    return this.translationService.translate(key);
  }

  goToMultiStepForm() {
    this.router.navigate(['/facta-aeoi-form']);
  }
}
