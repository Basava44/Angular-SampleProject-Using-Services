import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor() {}

  @Input() data!: string;

  ngOnInit(): void {}

  arrayList = ['Topware', 'Indianware', 'FashionAccessories', 'Footware'];

  Data = {
    Topware: [
      'T-Shirts',
      'Casual Shirts',
      'Formal Shirts',
      'Sweatshirts',
      'Sweaters',
      'Jackets',
      'Blazers & Coats',
      'Suits',
      'Rain Jackets',
    ],
    Indianware: ['Kurtas & Kurta Sets', 'Sherwanis', 'Nehru Jackets', 'Dhotis'],
    Footware: [
      'Casual Shoes',
      'Sports Shoes',
      'Formal Shoes',
      'Sneakers',
      'Sandals & Floaters',
      'Flip Flops',
      'Socks',
    ],
    FashionAccessories: [
      'Wallets',
      'Belts',
      'Perfumes & Body Mists',
      'Trimmers',
      'Deodorants',
      'Ties, Cufflinks & Pocket Squares',
      'Accessory Gift Sets',
      'Caps & Hats',
      'Mufflers, Scarves & Gloves',
      'Phone Cases',
      'Rings & Wristwear',
      'Helmets',
    ],
  };

  funct() {
    for (let i in this.Data) {
      console.log(i);
    }
  }
}
