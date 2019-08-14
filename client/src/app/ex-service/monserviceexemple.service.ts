import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonserviceexempleService {

public panier: string[] = [];

  constructor() { }
  public test2: string = ''

  test3():string {
    this.test2 = 'Ca marche'
    return this.test2
  }

  add(aliment: string):any {
    this.panier.push(aliment)
  }
  remove(index: number) {
    this.panier.splice(index, 1)
  }
}
