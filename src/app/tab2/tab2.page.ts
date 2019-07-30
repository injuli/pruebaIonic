import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 3.42158;
  lng =  -76.5205;

  constructor() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaW5qdWxpIiwiYSI6ImNqeW95ODJ0bzE5dTEzZHM4eHVod20xbWIifQ.rNBV_OWPHu1CTxAyTYLNBg';
    // console.log(mapboxgl.accessToken);
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
      zoom: 9,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    console.log(this.map);
  }




}
