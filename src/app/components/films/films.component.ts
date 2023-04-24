import { Component, Input } from '@angular/core';
import { mediaInterface } from './../../models/media';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {

  @Input() public media!: mediaInterface
}
