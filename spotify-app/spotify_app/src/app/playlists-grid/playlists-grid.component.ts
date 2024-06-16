import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { EndpointService } from '../endpoint.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ISpotifyPlaylistTracks } from 'src/interfaces/IPlaylistTracks';

@Component({
  selector: 'app-playlists-grid',
  templateUrl: './playlists-grid.component.html',
  styleUrls: ['./playlists-grid.component.scss']
})
export class PlaylistsGridComponent {
  arrOfPlaylists!: ISpotifyPlaylistTracks["items"];
  id!: string | null;
  tracks!: ISpotifyPlaylistTracks;
  

  constructor(private _router: Router, private _endPointService: EndpointService, private _route: ActivatedRoute) {
    this.id = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit() :void {
    this._route.params.subscribe(routeParams => {
      this.updatePlaylistsTracks(routeParams['id']);
    });  
  }
  
  private updatePlaylistsTracks(id:string): void {
    this._endPointService.getPlaylistsItems(id).subscribe(
      res  => {
        this.tracks = res
        this.arrOfPlaylists = res.items.map((val) => val)
      },
      err => {
        throw err;
      }
    );
  }
}
