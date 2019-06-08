import { Offer } from './offer.model';
import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  loadedOffers: Offer[];
  constructor(
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.loadedOffers = this.placesService.offers;
  }

}
