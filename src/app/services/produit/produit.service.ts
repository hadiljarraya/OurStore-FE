import { Injectable } from '@angular/core';
import { Produit } from 'src/app/shared/models/Produit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

    constructor(private http: HttpClient) {}
    getAll() {
      console.log("access to service ..........");
      return this.http.get<[Produit]>('http://localhost:8080/produit');
    }
    create(payload: Produit) {
      return this.http.post<Produit>('http://localhost:8080/produit', payload);
    }
    

   
 }
  
     