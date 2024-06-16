import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ArtistsComponent } from './artists/artists.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'
import {FormsModule} from '@angular/forms';
import { PlayerComponent } from './player/player.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { ArtistsGridComponent } from './artists-grid/artists-grid.component';
import { PlaylistsGridComponent } from './playlists-grid/playlists-grid.component';
import { httpInterceptorProviders } from '.';
import { SearchComponent } from './search/search.component';
import { AlbumsComponent } from './albums/albums.component';
import { TracksComponent } from './tracks/tracks.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArtistsComponent,
    PlayerComponent,
    PlaylistsComponent,
    SideNavComponent,
    HomeComponent,
    ArtistsGridComponent,
    PlaylistsGridComponent,
    SearchComponent,
    AlbumsComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
