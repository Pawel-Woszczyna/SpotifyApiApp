import { Component, Input } from '@angular/core';
import { EndpointService } from '../endpoint.service';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ISpotifyPlaylist, Item } from 'src/interfaces/IPlaylist';
import { IMineSpotifyAlbum } from 'src/interfaces/IMineAlbum';
import { IMineSpotifyTracks } from 'src/interfaces/IMineTracks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  recentPlaylists!: ISpotifyPlaylist["items"];
  recentAlbums!:IMineSpotifyAlbum["items"];
  recentTracks!: IMineSpotifyTracks["items"];
  playlists!: ISpotifyPlaylist
  albums!: IMineSpotifyAlbum;
  tracks!: IMineSpotifyTracks;
  cols !: number;
  colsAlbums!: number;
  
  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 2
  }

  gridByBreakpointAlbumsNTracks = {
    xl: 4,
    lg: 4,
    md: 4,
    sm: 2,
    xs: 2
  }

  constructor(private _router: Router, private _endPointService: EndpointService, private _breakpointObserver: BreakpointObserver) {
    this._breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
          this.colsAlbums = this.gridByBreakpointAlbumsNTracks.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
          this.colsAlbums = this.gridByBreakpointAlbumsNTracks.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
          this.colsAlbums = this.gridByBreakpointAlbumsNTracks.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
          this.colsAlbums = this.gridByBreakpointAlbumsNTracks.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
          this.colsAlbums = this.gridByBreakpointAlbumsNTracks.xl;
        }
      }
    });
   }
   
  ngOnInit() :void {
    this.updateUsersPlaylists()
    this.updateAlbums()
    this.updateTracks()
  }

  private async updateUsersPlaylists(): Promise<void> {
    (await this._endPointService.getUsersPlaylists()).subscribe(
      res  => {
        this.playlists = res;
        this.recentPlaylists = res.items.map((val) => val)
        this.recentPlaylists = this.recentPlaylists.slice(0, 6);
      },
      err => {
        throw err;
      }
    );
  }

  private async updateAlbums(): Promise<void> {
    (await this._endPointService.getMineAlbums()).subscribe(
      res  => {
        this.albums = res;
        this.recentAlbums = res.items.map((val) => val)
        this.recentAlbums = this.recentAlbums.slice(0, 4);
      },
      err => {
        throw err;
      }
    );
  }
  
  private async updateTracks(): Promise<void> {
    (await this._endPointService.getMineTracks()).subscribe(
      res  => {
        this.tracks = res
        this.recentTracks = res.items.map((val) => val)
        this.recentTracks = this.recentTracks.slice(0, 4);
      },
      err => {
        throw err;
      }
    );
  }
  
}
