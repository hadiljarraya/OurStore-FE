import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProduitsComponent } from './produits/produits.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { WorkersComponent } from './workers/workers.component';

import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { BarRatingModule } from "ngx-bar-rating";
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './produits/create/create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProduitsComponent,
    HomeComponent,
    CounterComponent,
    WorkersComponent,
    
    GalleryComponent,
         ContactComponent,
         OrderComponent,
         FooterComponent,
         ReservationComponent,
         CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarRatingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
