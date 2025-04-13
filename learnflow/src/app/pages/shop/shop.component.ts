import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  termekek = [
    { name: 'Horgászbot', kep: 'image1.jpg', akcios: true, ar: 10000, ertekeles: 4.5 },
    { name: 'Orsó', kep: 'image2.jpg', akcios: false, ar: 15000, ertekeles: 4.8 }
  ];
  
  isAuthenticated = true;
  
  mennyisegek = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  kosarhozAd(termekId: number) {
    console.log('Kosárhoz adva termék ID:', termekId);
  }
}
