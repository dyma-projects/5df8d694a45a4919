import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  interpolation = "Ceci est une interpolation";
  constructor() { }

  ngOnInit() {
  }

  onAlertInfo() {
    alert('Ceci est un event binding !');
  }

}
