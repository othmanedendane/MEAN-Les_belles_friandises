export interface friandises {

  _id?:string; //Le ? informe Angular que le _id n’est pas obligatoire pour tous les échanges et ce, parce que lors de la création d’un document, ce dernier n’existe pas encore.
  marque:string;
  prix:string;
  cie:string;
  categorie:string;
}
