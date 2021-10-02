import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = ["../../assets/petespiratelife_210567635_3060562740896595_3113534423192527964_n.jpeg","../../assets/slide-1.jpeg","../../assets/slide-2.jpeg"];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true; }

  ngOnInit(): void {
  }

}
