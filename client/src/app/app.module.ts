// app.module.ts 
// Ce module nous sert à regrouper les components qui sert ce module. Nous pouvons par exemple créer plusieurs modules pour différentes sections du site. (Par exemple : la partie paiement etc..) 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { Newcomp2Component } from './newcomp2/newcomp2.component';
import { HeaderComponent } from './header/header.component';

// Test connection avec node.js
import { UserService } from './user.service';
import { HttpClientModule } from "@angular/common/http";

// Directives
import { DrtvDirective } from './directives/drtv.directive';

// Mes services
import { Moncomponent1Component } from './ex-service/moncomponent1/moncomponent1.component';
import { Moncomponent2Component } from './ex-service/moncomponent2/moncomponent2.component';
import { MonserviceexempleService
} from './ex-service/monserviceexemple.service';

@NgModule({
  declarations: [
    AppComponent,
    NewcompComponent,
    Newcomp2Component,
    HeaderComponent,
    DrtvDirective,
    Moncomponent1Component,
    Moncomponent2Component,
    //Les nouveaux component que j'ai crée sont automatiquement mis à jour ici dans mon app.module.ts
    // Toutes les déclarations sont les compononents associés à ce module.
  ],
  imports: [
     // Ici nous pouvons importer toutes les fonctionnalités que nous pouvons utiliser sur nos components liés à ce module.
    BrowserModule,
    // Ici par exemple nous avons 'BrowserModule' qui est une serie de directive native que nous pouvons utiliser sur nos components (ngIf, ngFor).. 
    // Il faut les importer (voir plus haut)
    FormsModule,
    // Test connection avec node.js
    HttpClientModule
  ],
  providers: [UserService, MonserviceexempleService],
  bootstrap: [
    AppComponent,
    Newcomp2Component,
    HeaderComponent
    // En intégrant la ligne de mon module ici je peux utiliser sa balise dans le fichier index.html
    // Il est par définition enfant de aucune component.
  ]
})
export class AppModule { }
