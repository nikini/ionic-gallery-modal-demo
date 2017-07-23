import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

// Import your library
import * as ionicGalleryModal from 'ionic-gallery-modal';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    ionicGalleryModal.GalleryModalModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: ionicGalleryModal.GalleryModalHammerConfig,
  }]
})
export class AppModule {}
