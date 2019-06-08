import { Offer } from './offers/offer.model';
import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Title 1',
      'this is place 1',
      'https://via.placeholder.com/300/150',
      99
    ),
    new Place(
      'p2',
      'Title 2',
      'this is place 2',
      'https://via.placeholder.com/300/250',
      99
    ),
    new Place(
      'p3',
      'Title 3',
      'this is place 3',
      'https://via.placeholder.com/300/350',
      99
    )
  ];

  private _offers: Offer[] = [
    new Offer(
      'o1',
      'Title 1',
      'this is place 1',
      'https://via.placeholder.com/300/150',
      99
    ),
    new Offer(
      'o2',
      'Title 2',
      'this is place 2',
      'https://via.placeholder.com/300/250',
      99
    ),
    new Offer(
      'o3',
      'Title 3',
      'this is place 3',
      'https://via.placeholder.com/300/350',
      99
    )
  ];

  get places() {
    return [...this._places];
  }

  get offers() {
    return [...this._offers];
  }
  constructor() { }

  getOffer(id: string) {
    return { ...this._offers.find(o => o.id === id) };
  }

  getPlace(id: string) {
    return { ...this._places.find(p => p.id === id) };
  }
}
