import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { ArtistsComponent } from './artists/artists.component';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { PlaylistsGridComponent } from './playlists-grid/playlists-grid.component';
import { SearchComponent } from './search/search.component';
import { AlbumsComponent } from './albums/albums.component';
import { TracksComponent } from './tracks/tracks.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'player', component: PlayerComponent, children: [ 
    {
      path: 'home', component: HomeComponent,
    },
    {
      path: 'artists', component: ArtistsComponent
    },
    { 
      path: 'albums/:id', component: AlbumsComponent 
    },
    { 
      path: 'tracks/:id', component: TracksComponent 
    },
    {
      path: 'playlists/:id', component: PlaylistsGridComponent
    },
    {
      path: 'search', component: SearchComponent
    }
  ] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
