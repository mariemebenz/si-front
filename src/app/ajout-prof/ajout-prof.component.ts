import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { prof } from 'src/prof';

@Component({
  selector: 'app-ajout-prof',
  templateUrl: './ajout-prof.component.html',
  styleUrls: ['./ajout-prof.component.css']
})
export class AjoutProfComponent {

  nom: String = '';
  prenom: String = '';
  ville: String = '';
  adresse: String = '';
  dateD: Date = new Date();
  dateE: Date = new Date();
  telEcol: String = '';
  telDom: String = '';

  constructor(private service: RestapiService) {}

  saveProf() {
    // Créez une instance de la classe prof
    const profObj: prof = {
   // Attribuez une valeur à numProf
      nom: this.nom,
      prenom: this.prenom,
      ville: this.ville,
      adresse: this.adresse,
      dateD: this.dateD,
      dateE: this.dateE,
      telEcol: this.telEcol,
      telDom: this.telDom
    };

    // Appelez le service en passant l'objet créé
    this.service.AddProf(profObj).subscribe(
      () => {
        console.log(profObj);
        alert('Opération réussie');
      },
      (error: any) => {
        console.log('Erreur lors de l\'envoi des données :', error);
        alert('Erreur lors de l\'envoi des données');
      }
    );
  }
}