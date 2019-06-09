import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  offer: Offer;
  constructor(
    private route: ActivatedRoute,
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
    });
  }

}
