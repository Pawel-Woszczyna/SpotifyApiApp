import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artists-grid',
  templateUrl: './artists-grid.component.html',
  styleUrls: ['./artists-grid.component.scss']
})

export class ArtistsGridComponent {
  @Input() name!: string
  @Input() images!: string
  @Input() index!: number;
}

