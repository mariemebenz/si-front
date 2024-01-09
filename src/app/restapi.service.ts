import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { MinValidator } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Etudiant } from 'src/etudiant';
import { prof } from 'src/prof';
import { promo } from 'src/promo';
import { competence } from 'src/competence';
import { acquerir } from 'src/acquerir';
import { associer} from 'src/associer';
import { tuteur } from 'src/tuteur';
import { entreprise } from 'src/entreprise';
import { stage } from 'src/stage';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {


  constructor(private http:HttpClient,private snackBar:MatSnackBar,private zone:NgZone) { }
  public  AddProf( proff :prof){
    const requestBody = { prof:proff};
    return this.http.post<void>(`http://localhost:9091/admin/order/ajouterProf`,requestBody)
   }

   public  AddPromo( p :promo){
    const requestBody = { promo:p};
    return this.http.post<void>(`http://localhost:9091/admin/order/ajouterPromo`,requestBody)
   }

   public  AddEtu( p :Etudiant){
    const requestBody = { etu:p};
    return this.http.post<void>(`http://localhost:9091/admin/order/ajouterEtu`,requestBody)
   }

   public  AddComp( p :competence){
    const requestBody = { competence:p};
    return this.http.post<void>(`http://localhost:9091/admin/order/ajouterEtu`,requestBody)
   }

   public  AddAcquerir( p :acquerir){
    const requestBody = { acquerir:p};
    return this.http.post<void>(`http://localhost:9091/admin/order/ajouterEtu`,requestBody)
   }

   public  AddAssocier( p :associer){
    const requestBody = { associer:p};
    return this.http.post<void>(`http://localhost:9091/admin/order/ajouterEtu`,requestBody)
   }


   public  AddEntreprise( p :entreprise){
    const requestBody = { entreprise:p};
    return this.http.post<void>(`http://localhost:9091/admin/order/ajouterEtu`,requestBody)
   }

   public  AddTuteur( p :tuteur){
    const requestBody = { tuteur:p};
    return this.http.post<void>(`http://localhost:9091/admin/order/ajouterEtu`,requestBody)
   }

   public  AddStage( p :stage){
    const requestBody = { stage:p};
    return this.http.post<void>(`http://localhost:9091/admin/order/ajouterEtu`,requestBody)
   }


}