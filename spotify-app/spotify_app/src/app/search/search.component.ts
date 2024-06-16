import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from '../endpoint.service';
import { Artists, ISpotifySearchArtists } from 'src/interfaces/IArtistsSearch';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ISpotifySearchTracks, TracksClass } from 'src/interfaces/ITracksSearch';
import { Categories, ISpotifyCategories } from 'src/interfaces/ICategories';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchArtistsInterface!: ISpotifySearchArtists
  searchTracksInterface!: ISpotifySearchTracks
  categoriesInterface!: ISpotifyCategories
  getCategories!: Categories["items"];
  searchForArtists!: Artists["items"];
  searchForTracks!: TracksClass["items"];
  public searchQuery!:string;
  cols !: number;
  
  gridByBreakpoint = {
    xl: 8,
    lg: 6,
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
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });
   }
  ngOnInit(){
    this.updateCategories()
  }

  public runAll(){
    this.searchArtists()
    this.searchTracks()
  }

  public searchArtists(){
    this._endPointService.getArtistsSearch(this.searchQuery).subscribe(
      res => { 
        this.searchArtistsInterface = res;
        this.searchForArtists = res.artists.items.map((val) => val)
        this.searchForArtists = this.searchForArtists.slice(0, 1);
      },
      err => {
        throw err;
      }
    )
  }

  public searchTracks(){
    this._endPointService.getTracksSearch(this.searchQuery).subscribe(
      res => { 
        this.searchTracksInterface = res;
        this.searchForTracks = res.tracks.items.map((val) => val)
        this.searchForTracks = this.searchForTracks.slice(0, 4);
      },
      err => {
        throw err;
      }
    )
  }

  public updateCategories(){
    this._endPointService.getCategories().subscribe(
      res => {
        this.categoriesInterface = res; 
        this.getCategories = res.categories.items.map((val: any) => val)
      },
      err => {
        throw err;
      }
    )
  }

}
