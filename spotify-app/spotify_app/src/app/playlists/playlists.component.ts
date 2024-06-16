import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from '../endpoint.service';
import { Observable, map } from 'rxjs';
import { ISpotifyPlaylist } from 'src/interfaces/IPlaylist';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent {
 
  arrOfPlaylists!: ISpotifyPlaylist["items"];
  playlists!: ISpotifyPlaylist
 
  constructor(private _router: Router, private _endPointService: EndpointService) { }

  ngOnInit() :void {
    this.updateUsersPlaylists()
  }

  private updateUsersPlaylists(): void {
    this._endPointService.getUsersPlaylists().subscribe(
      res  => {
        this.playlists = res
        this.arrOfPlaylists = res.items.map((val) => val)
      },
      err => {
        throw err;
      }
    );
  }
}
