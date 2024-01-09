import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { acquerir } from 'src/acquerir';
import { associer } from 'src/associer';


@Component({
  selector: 'app-fixer-stage',
  templateUrl: './fixer-stage.component.html',
  styleUrls: ['./fixer-stage.component.css']
})
export class FixerStageComponent {



    typeStage1: string = '';
    codeComp: string = '';
    nv: string = '';
    typeStage2: string = '';
    annee: string = '';
    dateDebut: string = '';
  
    constructor(private service: RestapiService) { }
  
    saveAcquerir() {
      const acquerirObj: acquerir = {
        typeStage1: this.typeStage1,
        codeComp: this.codeComp,
        nv: this.nv,
      };
  
      this.service.AddAcquerir(acquerirObj).subscribe(
        () => {
          console.log(acquerirObj);
          alert('Opération réussie');
        },
        (error: any) => {
          console.log('Erreur lors de l\'envoi des données :', error);
          alert('Erreur lors de l\'envoi des données');
        }
      );
    }
  
    saveAssocier() {
      const associerObj: associer = {
        typeStage2: this.typeStage2,
        annee: this.annee,
        dateDebut: this.dateDebut,
      };
  
      this.service.AddAssocier(associerObj).subscribe(
        () => {
          console.log(associerObj);
          alert('Opération réussie');
        },
        (error: any) => {
          console.log('Erreur lors de l\'envoi des données :', error);
          alert('Erreur lors de l\'envoi des données');
        }
      );
    }

}
