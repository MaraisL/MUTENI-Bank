import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  // TODO : REFACTO DUPLICATE CODE
  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.loadTranslations('fr').subscribe();
  }

  switchLanguage(language: string) {
    this.translationService.loadTranslations(language).subscribe();
  }

  getTranslation(key: string): string {
    return this.translationService.translate(key);
  }
}
