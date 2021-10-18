import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-myntra',
  templateUrl: './myntra.component.html',
  styleUrls: ['./myntra.component.scss'],
})
export class MyntraComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  showList: boolean = false;
  listData!: string;

  goToWishlist() {
    this.router.navigate(['wishlist'], { relativeTo: this.route });
  }
  goToBag() {
    this.router.navigate(['bag'], { relativeTo: this.route });
  }

  openList(type: string) {
    this.listData = type;
    this.showList = true;
  }

  open(){
    // this.showList = true;
  }

  closeList() {
    this.showList = false;
  }
}
