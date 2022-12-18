import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Produit } from 'src/app/shared/models/Produit';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) {}
  
  getAll(){
    
    
      console.log("access to service ..........");
      return this.http.get<[Food]>('http://localhost:8082/plate');
    
}

getPlateByIdRestaurant(id: number){
  return this.http.get<[Food]>('http://localhost:8082/platebyrestaurant/${id}'+id);
  
}

}
