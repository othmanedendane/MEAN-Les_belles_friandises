import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs'; //Importer la classe permettant d’utiliser le module observable

import { friandises } from '../models/modelBD'; //Importer l’interface utilisée à l’item a)

import { FriandisesService } from '../friandises.service'; // Importer la classe utilisée à l’item b).


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  FriandisesList$:Observable<friandises[]>; //Créer une propriété instanciée avec la classe observable et typée selon l’interface.

  friandises: any;


  constructor(private friandiseService: FriandisesService) { } //Instancier la classe du service que vous avez créée dans le fichier friandises.service.ts.

  ngOnInit(): void {
    this.FriandisesList$ = this.friandiseService.Friandises(); //Récupérer, dans la propriété de l’item a) ci-haut, le retour fourni par la méthode interne de la classe instanciée à l’item b).


    console.log(this.FriandisesList$);
  }

  getSoldValue(friandises:friandises){
    if (friandises.categorie=="chips"){
      return 'red';
    }
    else{
      return 'brown';
      }
  }

}
