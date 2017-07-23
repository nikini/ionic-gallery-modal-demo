import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private photos: any[] = [];

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {
    this.createPhotos();
  }

  private createPhotos(length:number = 5) {
    for (let i = 0; i < length; i++) {
      this.photos.push({
        url: `assets/images/${i}.jpg`,
      });
    }
    this.photos[2].title = 'This is a title';
  }

  private openModal() {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.photos,
      initialSlide: 1, // The second image
    });
    modal.present();
  }
}
