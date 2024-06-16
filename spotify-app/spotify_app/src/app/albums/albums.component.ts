import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EndpointService } from '../endpoint.service';
import { ISpotifyAlbumTracks } from 'src/interfaces/IAlbumTracks';
import { Item } from 'src/interfaces/IPlaylist';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {
  arrOfAlbums!: ISpotifyAlbumTracks["items"];
  id!: string | null;
  albums!: ISpotifyAlbumTracks;
  

  constructor(private _router: Router, private _endPointService: EndpointService, private _route: ActivatedRoute) {
    this.id = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit() :void {
    this._route.params.subscribe(routeParams => {
      this.updateAlbumTracks(routeParams['id']);
    });  
  }
  
  private updateAlbumTracks(id:string): void {
    this._endPointService.getAlbumTracks(id).subscribe(
      res  => {
        this.albums = res
        this.arrOfAlbums = res.items.map((val) => val)
      },
      err => {
        throw err;
      }
    );
  }
}
