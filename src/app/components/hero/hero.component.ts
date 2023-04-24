import { Component, Input } from '@angular/core';
import { mediaInterface } from 'src/app/models/media';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  @Input() public media!: mediaInterface
}
