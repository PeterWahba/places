import { PlacesService } from './../../places.service';
import { Offer } from './../offer.model';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  offer: Offer;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private placesService: PlacesService,

  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(pramMap => {
      if (!pramMap.has('placeId')) {
        this.navCtrl.navigateBack('places/tabs/offers');
        return;
      }
      this.offer = this.placesService.getOffer(pramMap.get('placeId'));
      console.log(pramMap.get('placeId'));

    });
  }

  onBookPlace() {
    // this.router.navigateByUrl('places/tabs/discover')
    this.navCtrl.navigateBack('places/tabs/offers');
  }
}
