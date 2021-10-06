// import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DevicesDataService } from './devicesData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   trigger('divState', [
  //     state(
  //       'normal',
  //       style({
  //         backgroundColor: 'red',
  //         transform: 'translateX(0)',
  //       })
  //     ),
  //     state(
  //       'highlighted',
  //       style({
  //         backgroundColor: 'blue',
  //         transform: 'translateX(100px)',
  //       })
  //     ),
  //     transition('normal <=> highlighted', animate(600)),
  //   ]),
  //   trigger('wildState', [
  //     state(
  //       'normal',
  //       style({
  //         backgroundColor: 'red',
  //         transform: 'translateX(0) scale(1)',
  //       })
  //     ),
  //     state(
  //       'highlighted',
  //       style({
  //         backgroundColor: 'blue',
  //         transform: 'translateX(100px) scale(1)',
  //       })
  //     ),
  //     state(
  //       'shrunken',
  //       style({
  //         backgroundColor: 'blue',
  //         transform: 'translateX(0) scale(0.5)',
  //       })
  //     ),
  //     transition('normal => highlighted', animate(600)),
  //     transition('highlighted => normal', animate(500)),
  //     transition('shrunken <=> *', animate(800)),
  //   ]),
  // ],
})
export class AppComponent implements OnInit {
  constructor(private mobileData: DevicesDataService) {}

  show: boolean = false;
  state = 'normal';
  wildState = 'normal';

  // animate() {
  //   this.state === 'normal'
  //     ? (this.state = 'highlighted')
  //     : (this.state = 'normal');
  //   this.wildState === 'normal'
  //     ? (this.wildState = 'highlighted')
  //     : (this.wildState = 'normal');
  // }

  // shrink() {
  //   this.wildState = 'shrunken';
  // }

  ngOnInit() {
    this.mobileData.show.subscribe((data) => (this.show = data));
  }
}
