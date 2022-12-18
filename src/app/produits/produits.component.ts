import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit/produit.service';
import { Produit } from '../shared/models/Produit';
declare var window: any;

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  
  Produit : Produit[]=[];
  constructor(private ProduitService:ProduitService ) { }


     
  ngOnInit(): void {
    console.log("***************");  
    this.ProduitService.getAll().subscribe((data) => {
      this.Produit = data;
      console.log(this.Produit);   
      })
 

  }
 
}
