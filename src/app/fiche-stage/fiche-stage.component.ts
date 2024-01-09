import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { entreprise } from 'src/entreprise';
import { tuteur } from 'src/tuteur';
import { stage } from 'src/stage';

@Component({
  selector: 'app-fiche-stage',
  templateUrl: './fiche-stage.component.html',
  styleUrls: ['./fiche-stage.component.css']
})
export class FicheStageComponent {

  numSiret: string= "";
    formeJuridique: string= "";
    raisonSociale: string="";
    adresse: string="";
    ville: string="";
    telephone: string="";
    fax: string="";

    numTuteur: string="";
    nom: string="";
    prenom: string="";
    telephone2: string="";
    nSiretTuteur: string="";


    numStage: string= "";
    compteRendu: string = "";
    numProf: string = "";
    codeEtudiant: string = "";
    numTuteurStage: string = "";
    nSiretStage: string = "";
    codeType: string= "";
    anneeStage: string="";

  constructor(private service: RestapiService) { }

  saveEntreprise() {
    const entrepriseObj: entreprise = {
      numSiret: this.numSiret,
      formeJuridique: this.formeJuridique,
      raisonSociale: this. raisonSociale,
      adresse: this.adresse,
      ville: this.ville,
      telephone: this.telephone,
      fax: this.fax,
    };

    this.service.AddEntreprise(entrepriseObj).subscribe(
      () => {
        console.log(entrepriseObj);
        alert('Opération réussie');
      },
      (error: any) => {
        console.log('Erreur lors de l\'envoi des données :', error);
        alert('Erreur lors de l\'envoi des données');
      }
    );
  }

  saveTuteur() {
    const tuteurObj: tuteur= {
      numTuteur: this. numTuteur,
      nom: this. nom,
      prenom: this. prenom,
      telephone2: this.  telephone2,
      nSiretTuteur: this. nSiretTuteur,
    };

    this.service.AddTuteur(tuteurObj).subscribe(
      () => {
        console.log(tuteurObj);
        alert('Opération réussie');
      },
      (error: any) => {
        console.log('Erreur lors de l\'envoi des données :', error);
        alert('Erreur lors de l\'envoi des données');
      }
    );
  }


  saveStage() {
    const stageObj: stage= {
      numStage : this. numStage,
      compteRendu: this. compteRendu,
      numProf: this.  numProf,
      codeEtudiant: this.   numProf,
      numTuteurStage: this. numTuteurStage,
      nSiretStage: this.  nSiretStage,
      codeType: this.   codeType,
      anneeStage: this. anneeStage,
    };

    this.service.AddStage(stageObj).subscribe(
      () => {
        console.log(stageObj);
        alert('Opération réussie');
      },
      (error: any) => {
        console.log('Erreur lors de l\'envoi des données :', error);
        alert('Erreur lors de l\'envoi des données');
      }
    );
  }
}
