import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/shared/models/Produit';
import { ProduitService } from '../../services/produit/produit.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  produitForm: Produit = {
    id: 0,
    name: '',
    imageUrl:'',
    description: '',
    prix: 0,
  };
 
  constructor(private produitService:ProduitService, private router: Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.produitService.create(this.produitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/produits"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
