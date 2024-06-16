import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EndpointService } from '../endpoint.service';
import { ISpotifyTracks } from 'src/interfaces/ITracks';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent {
  arrOfArtists!: ISpotifyTracks[];
  id!: string | null;
  tracks!: ISpotifyTracks;
  

  constructor(private _router: Router, private _endPointService: EndpointService, private _route: ActivatedRoute) {
    this.id = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit() :void {
    this._route.params.subscribe(routeParams => {
      this.updateAlbumTracks(routeParams['id']);
    });  
  }
  
  private updateAlbumTracks(id:string): void {
    this._endPointService.getTracks(id).subscribe(
      res  => {
        this.tracks = res;
      },
      err => {
        throw err;
      }
    );
  }
}
