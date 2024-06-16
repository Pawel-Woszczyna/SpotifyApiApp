import { Component } from '@angular/core';
import { ISpotifyUser } from 'src/interfaces/IUser';
import { EndpointService } from '../endpoint.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  users!: ISpotifyUser;

  constructor(private _router: Router, private _endPointService: EndpointService) { }

  ngOnInit() :void {
    this.updateUser()
  }

  private updateUser(): void {
    this._endPointService.getUser().subscribe(
      res => {
        this.users = res
      },
      err => {
        throw err;
      }
    );
  }

  logout() :void{
    this._router.navigate(['/login']);
    localStorage.clear()
  }  
}
