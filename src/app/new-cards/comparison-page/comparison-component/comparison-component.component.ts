import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparison-component',
  templateUrl: './comparison-component.component.html',
  styleUrls: ['../comparison-page.component.scss'],
})
export class ComparisonComponentComponent implements OnInit {
  constructor() {}

  @Input() mobiledata: any = {};

  ngOnInit(): void {}
}
