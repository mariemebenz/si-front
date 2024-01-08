import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { MinValidator } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Etudiant } from 'src/etudiant';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {


  constructor(private http:HttpClient,private snackBar:MatSnackBar,private zone:NgZone) { }
  
   /*public getEtudiant(profId:string) :Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(`http://localhost:9090/prof/findF/${profId}`)
   }
*/
}


