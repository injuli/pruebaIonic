import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  map: mapboxgl.Map;
  style= 'mapbox://styles/mapbox/outdoors-v9';
  lat = 2.9376145;
  lng = -75.2660218;

  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken
    // mapboxgl.accessToken = 'pk.eyJ1IjoiaW5qdWxpIiwiYSI6ImNqeW95ODJ0bzE5dTEzZHM4eHVod20xbWIifQ.rNBV_OWPHu1CTxAyTYLNBg';
     console.log(mapboxgl.accessToken);
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.buildMap();
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });

    console.log(this.map);
  }




}
