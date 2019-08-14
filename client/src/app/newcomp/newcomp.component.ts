import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// Le service pour la connexion avec Node.js
import { UserService } from '../user.service';

// Le service pour l'exemple
import { MonserviceexempleService } from '../ex-service/monserviceexemple.service';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {

  // NOTE IMPORTANTE : Pour l'instant il me manque les méthodes pour échanger entre les components parent > enfant (input) et enfant > parent (output) (Chapitre 4). Je vais l'ajouter plus tard. Il manque également les encapsulations css (Chapitre 4) et aussi ng content (Chapitre 4) mais aussi ContentChild.. Je dois aussi faire une note concernant les ngOninit, ngOnchange etc..

  
  
  // Les différents types d'interpolations.
  public maString: string = 'Ceci est mon texte';
  public monNumber: number = 10
  public monBool: boolean = true
  public monObj: {val: string} = {
    val: "mon texte dans mon objet"
  }
  public maTab: string[] = ['mon texte dans mon tableau']
  public maFonction = (monArg: number):number => {
    return (monArg * monArg)
  }
  // Fin des exemples des types d'interpolations.

  // Le data-binding des propriété
  public maDateLogique: string = 'date';
  public monTexteChange: string = 'Mon texte va changer !'
  // Le data-binding des évenement
  public color: string = "red";
  monEvent(data):any {
    this.color =  data
  }
  public monexpression: string = "Voici le contenu de ma variable monexpression";

  // Le double-data-binding
  // J'ai importé sur app.module.ts > FormsModule
  public content: string = "Mon texte dans mon content";
  // Fin des exemples de data-binding.


  // Les directives *ngIf
  public display: boolean = false;
  public monButtonAff: boolean = true;
  public monButtonCac: boolean = false;
  // Les directives ngStyle
  public maCouleur: string = '';
   // Les directives ngClass
  public colorClass1: string = '';
  public colorClass2: string = '';

  // Test connection avec Node.js
  public users: { name: string }[]
  

  // Les directives ngFor
  // Dans l’exemple suivant nous allons suivre les changements de la valeur de id sur chaque item (voir ngOnInit aussi):
  public itemsTrack: {name:string, id:number}[];
  public items: {name:string, id:number}[];
  
  constructor(
    // Test connection avec Node.js
    private UserService: UserService, private MonexempleService: MonserviceexempleService,
    
    ) {

    // Le data-binding des propriété
    setTimeout(() => {
      this.monTexteChange = "Mon nouveau texte !"
    },2000);
  }
 
  ngOnInit() {
    // Les directives ngFor avec trackBy
    this.itemsTrack = [
      {name:'tata', id: 1},
      {name:'titi', id: 2},
      {name:'toto', id: 3}
    ];
    // Les directives ngFor sans trackBy
    this.items = [
      {name:'tata', id: 1},
      {name:'titi', id: 2},
      {name:'toto', id: 3}
    ];
    //
  
    // Les Observables
    const obs = Observable.create((observer: Observer<any>) => {
      const data = 2
      observer.next(2);
      observer.next(3);
      observer.next(4);
      setTimeout(() => {
        observer.next(5);
      }, 2000);
      observer.complete()
    });
    
    const sub = obs.subscribe({
      next: (x) =>{ console.log('[next]' , x)},
      complete: () =>{ console.log('[complete]');},
      error: (err) => {console.log('[error]', err);}
    })
  }
  
   // Les directives ngFor sans trackBy
  maFonctionNgFor () {
    this.items.push({name: 'tutu', id: 4})
    console.log(this.items)
  }
  // Les directives ngFor avec trackBy
  maFonctionNgForTrack () {
    this.itemsTrack.push({name: 'tutu', id: 4})
    console.log(this.itemsTrack)
  }
  // Les directives ngFor avec trackBy
  trackById(index, item) { return item.id; };


  // Les références locales 
  public maRefLoc: any[] = [];
  public monMessageErreur: string = '';
  public test90: string = '';
  
  addFruit(reference: any) {
    // Nous pouvons accéder à toutes les infos balises html de notre input grace à notre reference. Ici nous avons par exemple selectionner l'information value. 
    this.test90 = reference.value;

    if (this.test90.length < 10) {
      this.maRefLoc.push(`Value : ${reference.value} | Type ${reference.type} | Le nombre de caractére : ${this.test90.length}`)
      this.monMessageErreur = '';
    } else {
      this.monMessageErreur = 'Veuillez ne pas dépasser les 10 caractéres'
    }
    console.log(this.maRefLoc);
  }
  //

  // ViewChild 
  // Nous pouvons accéder à toutes les infos balises html de notre input grace à notre ViewChild. Ceci est une seconde façon de récupérer les informations du dom. Pour ce faire d'abord nous devons importer un décorateur ViewChild mais aussi ElementRef.
  @ViewChild('g', {static: true}) public el: ElementRef
  public maRefLocViewChild: any[] = [];
  public test99: string = '';
  addFruitViewChild() {
    //console.log(this.el);
    this.test99 = this.el.nativeElement.value
    if (this.test90.length < 10) {
      this.maRefLocViewChild.push(`Value : ${this.el.nativeElement.value} | Type ${this.el.nativeElement.type} | Le nombre de caractére : ${this.el.nativeElement.selectionStart}`)
      this.monMessageErreur = '';
    } else {
      this.monMessageErreur = 'Veuillez ne pas dépasser les 10 caractéres'
    }
  }
  //


  // Les Services
  public testservice01: string = '';
  testMethodeService():void {
    this.testservice01 = this.MonexempleService.test3()
  }

  // Test connection avec node.js
  monTest() {
  
    this.UserService.getUsers().subscribe( users => {
      console.log(users);
      if (users) {
        this.users = users;
      } else {
        this.users = [];
      }
    })
     
   }
 //


}
