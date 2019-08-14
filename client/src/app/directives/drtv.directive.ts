import { Directive, HostListener, Input, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDrtv]'
})
export class DrtvDirective {
  @Input('monInput') data;
  // Input est un décorateur et c'est pour cette raison que nous le déclarons avec un @. ici je déclare mon INPUT et je lui mets un alias qui doit retrouver 'monInput' puis l'assigner à une variable data qui va retourner les informations.

  // Nous pouvons utiliser 2 facons différentes pour les styles des directives. 
// 1)
/////////////////////////////////////////////////////////////////////////////////////////
  
  // 1) @HostBinding('style.backgroundColor') backgroundColor = "transparent"
    // a) pour utiliser HostBinding il faut d'abord l'importer.
    // b) puis faire @HostBinding('style.cequonsouhaitefaire') lenomdelavariable = 'blue'
/////////////////////////////////////////////////////////////////////////////////////////

// 2) HostListener pour faire des événements avec nos directives.
/*      @HostListener('mouseout ou click..') mouseout(){
        this.backgroundColor = "yellow"
         }
*/
  @HostBinding('style.backgroundColor') backgroundColor = "transparent"
  @HostBinding('style.color') colorText = "black"
  
 
  
  constructor() { 

   }

   ngOnInit(): void {
     
     //
     // En utilisant HostBinding & Input
     if (this.data) {
      console.log(this.data);
      this.backgroundColor = this.data.backgroundCol
      this.colorText = this.data.text
     }
    
   }
   
   //
   @HostListener('click') click(){
     if (this.data && this.data.clickBackground) {
        this.backgroundColor = this.data.clickBackground
     }
  }
   @HostListener('mouseout') mouseout(){
    if (this.data && this.data.mouseOutBackground) {
     this.backgroundColor = this.data.mouseOutBackground;
   }
  }
}
