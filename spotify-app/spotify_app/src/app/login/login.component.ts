import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../endpoint.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _endpointService: EndpointService, private _router: Router) { }

  ngOnInit(): void {
    this.verifySpotifyCode();
  }

  private verifySpotifyCode(): void{
    const token = this._endpointService.getSpotifyToken()
    if(!!token){
      this._endpointService.setSpotifyToken(token);
      this._router.navigate(['/player/home'])
    }
  }
  
  login(): void{
    window.location.href = this._endpointService.spotifyLogin()
  }
}
