import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'muteni-bank';
  constructor(public translationService: TranslationService) {}

  ngOnInit() {
    // Load langage from local storage
    const storedLang = localStorage.getItem('currentLang') || 'fr';
    this.translationService.loadTranslations(storedLang).subscribe();
    console.debug('AppComponent initialized, current language:', storedLang);
  }

  switchLanguage(language: string) {
    this.translationService.loadTranslations(language).subscribe();
    console.debug('Language switched to:', language);
  }

  getTranslation(key: string): string {
    return this.translationService.translate(key);
  }
}
