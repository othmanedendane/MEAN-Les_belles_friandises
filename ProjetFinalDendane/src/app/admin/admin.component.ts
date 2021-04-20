import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs'; //Importer la classe permettant d’utiliser le module observable

import { friandises } from '../models/modelBD';

import { FriandisesService } from '../friandises.service'; // Importer la classe utilisée à l’item b).



import * as $ from'jquery';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  FriandisesList$:Observable<friandises[]>;
  friandForm: FormGroup;



  constructor(private formBuilder: FormBuilder, private FriandisesService : FriandisesService ) { }

  ngOnInit(): void {
    this.initFriandidesForm();
    this.FriandisesList$ = this.FriandisesService.Friandises();
  }

  initFriandidesForm(){
    this.friandForm=this.formBuilder.group({
      marque: ['', Validators.required],
      categorie: ['', Validators.required],
      cie: ['', Validators.required],
      prix: ['', Validators.required]
    });
  }
  onSubmitFriandForm(){

    const newFriand :friandises= this.friandForm.value;

    this.FriandisesService.createFriandise(newFriand);
    this.friandForm.reset();
    ($('#propertiesFormModal') as any).modal('hide');
    ($('#confirm') as any).modal('show');
  }

  supp(friandise:friandises){
    /*const delFriandise :friandises= this.friandForm.value;
    this.FriandisesService.deleteFriandise(delFriandise);
    this.FriandisesService.deleteFriandise(friandise);*/
    if(confirm("Voulez-vous vraiment supprimer "+friandise.marque)) {
      this.FriandisesService.deleteFriandise(friandise);



    }


  }





}
