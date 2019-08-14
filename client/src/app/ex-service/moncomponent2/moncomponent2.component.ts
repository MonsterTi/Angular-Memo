import { Component, OnInit } from '@angular/core';
import { MonserviceexempleService } from '../monserviceexemple.service';

@Component({
  selector: 'app-moncomponent2',
  templateUrl: './moncomponent2.component.html',
  styleUrls: ['./moncomponent2.component.css']
})
export class Moncomponent2Component implements OnInit {
  public panier: string[] = []

  constructor(private MonexempleService: MonserviceexempleService) { }

  ngOnInit() {
    this.panier = this.MonexempleService.panier
  }
  removeAliment(index: number) {
    this.MonexempleService.remove(index)
  }

}
