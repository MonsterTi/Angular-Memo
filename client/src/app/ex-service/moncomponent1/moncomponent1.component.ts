import { Component, OnInit } from '@angular/core';
import { MonserviceexempleService } from '../monserviceexemple.service';

@Component({
  selector: 'app-moncomponent1',
  templateUrl: './moncomponent1.component.html',
  styleUrls: ['./moncomponent1.component.css']
})
export class Moncomponent1Component implements OnInit {
  public aliment: string = 'Aliment';

  constructor(private MonexempleService: MonserviceexempleService) { }

  ngOnInit() {
  }

add():void {
this.MonexempleService.add(this.aliment);
console.log(this.aliment);

this.aliment = '';
}
}
