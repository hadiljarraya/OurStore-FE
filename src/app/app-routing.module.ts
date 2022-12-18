import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkersComponent } from './workers/workers.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ProduitsComponent } from './produits/produits.component';
import { CreateComponent } from './produits/create/create.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'produits',component:ProduitsComponent},
  {path:'workers',component:WorkersComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component:ContactComponent},
  {path:'order',component:OrderComponent},
  {path:'reservation',component:ReservationComponent},
  {path: 'produits/create',component: CreateComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
