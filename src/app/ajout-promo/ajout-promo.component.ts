import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { promo } from 'src/promo';

@Component({
  selector: 'app-ajout-promo',
  templateUrl: './ajout-promo.component.html',
  styleUrls: ['./ajout-promo.component.css']
})
export class AjoutPromoComponent {

  anneePromo: String = '';
    nombreInscrits: String ='';
    nombreRecus: String ='';
    numeroProfesseur: bigint = 0n;
    
  constructor(private service: RestapiService) {}

  savePromo() {
    // Créez une instance de la classe prof
    const promoObj: promo = {
   // Attribuez une valeur à numProf
   anneePromo:this.anneePromo,
   nombreInscrits:this.nombreInscrits,
   nombreRecus:this.nombreRecus,
   numeroProfesseur:this.numeroProfesseur
   
    };

    // Appelez le service en passant l'objet créé
    this.service.AddPromo(promoObj).subscribe(
      () => {
        console.log(promoObj);
        alert('Opération réussie');
      },
      (error: any) => {
        console.log('Erreur lors de l\'envoi des données :', error);
        alert('Erreur lors de l\'envoi des données');
      }
    );
  }
}