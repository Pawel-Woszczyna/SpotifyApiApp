import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SpotifyAuthorizeEnv} from 'src/Environments/env';
import { Observable } from 'rxjs';
import Spotify from 'spotify-web-api-js';
import { Router } from '@angular/router';
import { ISpotifyPlaylist } from 'src/interfaces/IPlaylist';
import { ISpotifyArtists } from 'src/interfaces/IArtists';
import { ISpotifyUser } from 'src/interfaces/IUser';
import { ISpotifyPlaylistTracks } from 'src/interfaces/IPlaylistTracks';
import { IMineSpotifyAlbum } from 'src/interfaces/IMineAlbum';
import { IMineSpotifyTracks } from 'src/interfaces/IMineTracks';
import { ISpotifySearchArtists } from 'src/interfaces/IArtistsSearch';
import { ISpotifySearchTracks } from 'src/interfaces/ITracksSearch';
import { ISpotifyAlbumTracks } from 'src/interfaces/IAlbumTracks';
import { ISpotifyTracks } from 'src/interfaces/ITracks';
import { ISpotifyCategories } from 'src/interfaces/ICategories';

@Injectable({
  providedIn: 'root'
})

export class EndpointService {

  spotifyApi: Spotify.SpotifyWebApiJs;
  constructor(private _router: Router, private http: HttpClient) { 
    this.spotifyApi = new Spotify()
  }
  
  ngOnInit() :void {
    this.getSpotifyToken()
  }

  spotifyLogin(): string {
    const SPOTIFY_AUTHORIZE_URL = `${SpotifyAuthorizeEnv.SPOTIFY_AUTHORIZE_URL}?`;
    const CLIENT_ID = `client_id=${SpotifyAuthorizeEnv.CLIENT_ID}&`;
    const redirectUrl = `redirect_uri=${SpotifyAuthorizeEnv.redirectUrl}&`;
    const SCOPES = `scope=${SpotifyAuthorizeEnv.SCOPES.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return SPOTIFY_AUTHORIZE_URL + CLIENT_ID + redirectUrl + SCOPES + responseType; 
  }

  getSpotifyToken(): string {
    if(!window.location.hash)
      return '';
    
    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
    }

  setSpotifyToken(token: string): void {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }

  getUser(): Observable<ISpotifyUser> {
    return this.http.get<ISpotifyUser>(
      `https://api.spotify.com/v1/me`
    ); 
  }

  public getArtistsSearch(searchQuery: string): Observable<ISpotifySearchArtists> {
    return this.http.get<ISpotifySearchArtists>(
        `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist&limit=20`
      );
  } 

  public getTracksSearch(searchQuery: string): Observable<ISpotifySearchTracks> {
    return this.http.get<ISpotifySearchTracks>(
        `https://api.spotify.com/v1/search?q=${searchQuery}&type=track&limit=20`
      );
  } 

  getUsersPlaylists(): Observable<ISpotifyPlaylist> {
    return this.http.get<ISpotifyPlaylist>(
      `https://api.spotify.com/v1/me/playlists`
    ) 
  } 

  getTopArtistsData(): Observable<ISpotifyArtists> {
    return this.http.get<ISpotifyArtists>(
      `https://api.spotify.com/v1/me/top/artists`
    );
  } 

  getPlaylistsItems(id: string): Observable<ISpotifyPlaylistTracks> {
    return this.http.get<ISpotifyPlaylistTracks>(
      `https://api.spotify.com/v1/playlists/${id}/tracks`
    );
  } 

  getMineAlbums(): Observable<IMineSpotifyAlbum> {
    return this.http.get<IMineSpotifyAlbum>(
      `https://api.spotify.com/v1/me/albums`
    );
  } 
  getMineTracks(): Observable<IMineSpotifyTracks> {
    return this.http.get<IMineSpotifyTracks>(
      `https://api.spotify.com/v1/me/tracks`
    );
  } 

  getAlbumTracks(id: string): Observable<ISpotifyAlbumTracks> {
    return this.http.get<ISpotifyAlbumTracks>(
      `https://api.spotify.com/v1/albums/${id}/tracks`
    );
  } 

  getTracks(id: string): Observable<ISpotifyTracks> {
    return this.http.get<ISpotifyTracks>(
      `https://api.spotify.com/v1/tracks/${id}`
    );
  }

  getCategories(): Observable<ISpotifyCategories> {
    return this.http.get<ISpotifyCategories>(
      `https://api.spotify.com/v1/browse/categories`
    );
  } 
}    
