import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { Etudiant } from 'src/etudiant';

@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css']
})
export class AjoutEtudiantComponent {

    codeEtudiant: string=''
    nom: string=''
    prenom: string=''
    ville: string=''
    daten: Date=new Date();
    adresse: string=''
    mention: string=''
    tel: string=''
    anneePromo: string='';


    constructor(private service: RestapiService) {}

    saveEtu() {
      // Créez une instance de la classe prof
      const etuObj: Etudiant = {
     // Attribuez une valeur à numProf
        codeEtudiant: this.codeEtudiant,
        nom: this.nom,
        prenom: this.prenom,
        ville: this.ville,
        date_n: this.daten,
        adresse: this.adresse,
        mention: this.mention,
        tel: this.tel,
        anneePromo: this.anneePromo
      };
  
      // Appelez le service en passant l'objet créé
      this.service.AddEtu(etuObj).subscribe(
        () => {
          console.log(etuObj);
          alert('Opération réussie');
        },
        (error: any) => {
          console.log('Erreur lors de l\'envoi des données :', error);
          alert('Erreur lors de l\'envoi des données');
        }
      );
    }

}
