import { Component, Directive, Input} from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { EndpointService } from '../endpoint.service';
import { ISpotifyArtists } from 'src/interfaces/IArtists';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})

export class ArtistsComponent {
  
  artists!: ISpotifyArtists
  arrOfArtists!: ISpotifyArtists["items"];
  cols !: number;
  
  gridByBreakpoint = {
    xl: 2,
    lg: 2,
    md: 2,
    sm: 1,
    xs: 1
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

  ngOnInit() :void {
    this.updateTopArtists()
  }

  private updateTopArtists(): void {
    this._endPointService.getTopArtistsData().subscribe(
      res => {
        this.artists = res;
        this.arrOfArtists = res.items.map((val) => val)
      },
      err => {
        throw err;
      }
    );
  }
}
