import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Le service est global dans l'application
})
export class FormDataService {
  private formData: any = {}; // Objet pour stocker les données des étapes

  setData(step: string, data: any) {
    this.formData[step] = data; // Sauvegarde les données d'une étape
  }

  getData(step: string) {
    return this.formData[step] || {}; // Récupère les données d'une étape
  }

  getAllData() {
    return this.formData; // Récupère toutes les données du formulaire
  }

  resetData() {
    this.formData = {}; // Réinitialise le formulaire
  }
}
