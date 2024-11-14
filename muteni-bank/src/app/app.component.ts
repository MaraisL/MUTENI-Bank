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
  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.loadTranslations('en').subscribe();
  }

  switchLanguage(language: string) {
    this.translationService.loadTranslations(language).subscribe();
  }

  getTranslation(key: string): string {
    return this.translationService.translate(key);
  }
}
