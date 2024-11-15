import { Routes } from '@angular/router';
import { ProfilComponent } from './components/profil/profil.component';
import { MultiStepFormComponent } from './components/multi-step-form/multi-step-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'profil', pathMatch: 'full' },
  { path: 'profil', component: ProfilComponent },
  { path: 'facta-aeoi-form', component: MultiStepFormComponent },
];
