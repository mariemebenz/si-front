import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { competence } from 'src/competence';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent {

  codeComp: String = '';
  libelle: String = '';
  description: String = '';
 

  constructor(private service: RestapiService) {}

  saveComp() {
    // Créez une instance de la classe prof
    const compObj: competence = {
   // Attribuez une valeur à numProf
      codeComp: this.codeComp,
      libelle: this.libelle,
      description: this.description,
      
    };

    // Appelez le service en passant l'objet créé
    this.service.AddComp(compObj).subscribe(
      () => {
        console.log(compObj);
        alert('Opération réussie');
      },
      (error: any) => {
        console.log('Erreur lors de l\'envoi des données :', error);
        alert('Erreur lors de l\'envoi des données');
      }
    );

}
}
