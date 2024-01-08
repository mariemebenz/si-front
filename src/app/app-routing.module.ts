import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { ListeComponent } from './liste/liste.component';

import { EvaluerEtudiantComponent } from './evaluer-etudiant/evaluer-etudiant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { RemplirFicheComponent } from './remplir-fiche/remplir-fiche.component';

import { PlanificationComponent } from './planification/planification.component';
import { CompetenceComponent } from './competence/competence.component';

import { ProfileEtudiantComponent } from './profile-etudiant/profile-etudiant.component';
import { AdminComponent } from './admin/admin.component';
import { EtudiantEvaluationComponent } from './etudiant-evaluation/etudiant-evaluation.component';
import { DepotRenduComponent } from './depot-rendu/depot-rendu.component';
import { FicheStageComponent } from './fiche-stage/fiche-stage.component';
import { EtudiantSettingComponent } from './etudiant-setting/etudiant-setting.component';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { AjoutProfComponent } from './ajout-prof/ajout-prof.component';
import { AjoutPromoComponent } from './ajout-promo/ajout-promo.component';
import { EncadrantComponent } from './encadrant/encadrant.component';

const routes: Routes = [
  
  {path:"",redirectTo:"admin",pathMatch:"full"},
  {path:"",redirectTo:"encadrant",pathMatch:"full"},


  {path:"login",component:LoginComponent},
   {path:"etudiant",component:EtudiantComponent,children:[
    {path:"profile-etudiant",component:ProfileEtudiantComponent}
   ]},
 
   {path:"admin",component:AdminComponent,children:[
    {path:"competence",component:CompetenceComponent},{path:"planification",component:PlanificationComponent},
    {path:"evaluer-etudiant",component:EvaluerEtudiantComponent},
    {path:"ajout-etudiant",component:AjoutEtudiantComponent},
    {path:"ajout-prof",component:AjoutProfComponent},
    {path:"ajout-promo",component:AjoutPromoComponent},
   ]},


   {path:"encadrant",component:EncadrantComponent,children:[
    {path:"fiche-stage",component: FicheStageComponent},
    {path:"evaluer-etudiant",component:EvaluerEtudiantComponent},
  

   ]}
   
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
