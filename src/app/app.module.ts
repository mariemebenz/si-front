import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RestapiService } from './restapi.service';
import { FormsModule } from '@angular/forms';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginComponent } from './login/login.component';
import { ListeComponent } from './liste/liste.component';

import { EvaluerEtudiantComponent } from './evaluer-etudiant/evaluer-etudiant.component';

import { EtudiantComponent } from './etudiant/etudiant.component';
import { RemplirFicheComponent } from './remplir-fiche/remplir-fiche.component';

import { PlanificationComponent } from './planification/planification.component';
import { CompetenceComponent } from './competence/competence.component';
import { ProfileEtudiantComponent } from './profile-etudiant/profile-etudiant.component';
import { AdminComponent } from './admin/admin.component';
import { AjoutProfComponent } from './ajout-prof/ajout-prof.component';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { AjoutStageComponent } from './ajout-stage/ajout-stage.component';
import { ConsulterStageComponent } from './consulter-stage/consulter-stage.component';
import { FixerStageComponent } from './fixer-stage/fixer-stage.component';
import { FicheStageComponent } from './fiche-stage/fiche-stage.component';
import { EtudiantSettingComponent } from './etudiant-setting/etudiant-setting.component';
import { DepotRenduComponent } from './depot-rendu/depot-rendu.component';
import { EtudiantEvaluationComponent } from './etudiant-evaluation/etudiant-evaluation.component';
import { ChoisirTypeComponent } from './choisir-type/choisir-type.component';
import { AjoutPromoComponent } from './ajout-promo/ajout-promo.component';
import { EncadrantComponent } from './encadrant/encadrant.component';
import { ChoisirEtudiantComponent } from './choisir-etudiant/choisir-etudiant.component';
import { ConsulterEtudiantComponent } from './consulter-etudiant/consulter-etudiant.component';
import { DepotFicheComponent } from './depot-fiche/depot-fiche.component';
import { ChoisirEtudiantEvaluerComponent } from './choisir-etudiant-evaluer/choisir-etudiant-evaluer.component';
import { ResponsableComponent } from './responsable/responsable.component';



@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    ListeComponent,

    EvaluerEtudiantComponent,
    EtudiantComponent,
    PlanificationComponent,
    CompetenceComponent,
    ProfileEtudiantComponent,
    AdminComponent,
    AjoutProfComponent,
    AjoutEtudiantComponent,
    AjoutStageComponent,
    ConsulterStageComponent,
    FixerStageComponent,
    FicheStageComponent,
    EtudiantSettingComponent,
    DepotRenduComponent,
    EtudiantEvaluationComponent,
    ChoisirTypeComponent,
    AjoutPromoComponent,
    EncadrantComponent,
    ChoisirEtudiantComponent,
    ConsulterEtudiantComponent,
    DepotFicheComponent,
    ChoisirEtudiantEvaluerComponent,
    ResponsableComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
