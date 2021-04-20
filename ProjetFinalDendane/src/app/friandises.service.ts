import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import { friandises } from './models/modelBD';

import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FriandisesService {
  baseUrl='http://localhost:3824'

  constructor(private httpClient : HttpClient) { }

  Friandises(): Observable<friandises[]> {
     return this.httpClient.get<friandises[]>(`${this.baseUrl}/friandises`);

     console.log(this.httpClient.get<friandises[]>(`${this.baseUrl}/friandises`));
  }
  createFriandise(friandise:friandises){

    console.log(friandise);
    return this.httpClient.post<friandises>(`${this.baseUrl}/newfriandise`, friandise).subscribe(
      ()=>{
        console.log("ok");
      },
      (error) =>
      {
        console.log("erreur");
      }
    );
  }

  deleteFriandise(friandise:friandises){

    console.log(friandise);
    return this.httpClient.delete<friandises>(`${this.baseUrl}/delfriandise/${friandise._id}` ).subscribe(
      ()=>{
        location.reload(true);

        console.log("ok");
      },
      (error) =>
      {
        console.log("erreur");
      }
    );
  }



}
