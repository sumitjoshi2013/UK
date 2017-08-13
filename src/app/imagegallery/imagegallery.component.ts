//https://github.com/MurhafSousli/ng-gallery

import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from  '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser'
import {GalleryModule, GalleryService} from 'ng-gallery'


@Component({
  selector: 'app-imagegallery',
  templateUrl: './imagegallery.component.html'
})
export class ImagegalleryComponent implements OnInit {

// make a get call for image path
  images = [
    {
      src: 'https://murhafsousli.github.io/ng-gallery/assets/img/img7.jpg',
      text: 'City Sunset View'
    },
    {
      src: 'https://murhafsousli.github.io/ng-gallery/assets/img/img6.jpg',
      text: 'Mountain'
    },
    {
      src: 'https://murhafsousli.github.io/ng-gallery/assets/img/img5.jpg',
      text: 'Peacock'
    },
    {
      src: 'https://murhafsousli.github.io/ng-gallery/assets/img/img4.jpg',
      text: 'Fire'
    },
    {
      src: 'https://murhafsousli.github.io/ng-gallery/assets/img/img3.jpg',
      text: 'Nature'
    }
  ];
 constructor(private gallery: GalleryService) {
  }

  ngOnInit() {
     this.gallery.load(this.images);
  }

}
