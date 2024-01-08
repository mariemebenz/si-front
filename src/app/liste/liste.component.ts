import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { Etudiant } from 'src/etudiant';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {

/*
etudiants :Etudiant[]=[]
profId:string=''
nom:string=''
prenom:string=''
promotion:string=''
  constructor(private service:RestapiService) {}

  ngOnInit() {

    this.profId = String(sessionStorage.getItem('profId'));
  
    console.log(this.profId)
  }

    //proflogin
    getEtudiants()  {
      this.service.getEtudiant(this.profId).subscribe(
       (response:Etudiant[])=>{this.etudiants=response ; 
       console.log(this.etudiants);
       alert('operation reussie')
   
 
     }
   ,(error:HttpErrorResponse)=>{alert(error.message)
      });
      }
  */
      
}

