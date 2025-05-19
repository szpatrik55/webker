import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({ 
      projectId: "fishingshopweb", 
      appId: "1:42858190682:web:017798bfdaab72457d8563",
      storageBucket: "fishingshopweb.firebasestorage.app", 
      apiKey: "AIzaSyARgUHZ-1Lh1KD-pOJetHKRJw3WjwJzAuo",
      authDomain: "fishingshopweb.firebaseapp.com", 
      messagingSenderId: "42858190682" })), 
      provideAuth(() => getAuth()), 
      provideFirestore(() => getFirestore())]
};
