import {secretnClientID} from 'src/Environments/secret&client_id';

export const SpotifyAuthorizeEnv = {
    SPOTIFY_AUTHORIZE_URL: 'https://accounts.spotify.com/authorize',
    CLIENT_ID: secretnClientID.CLIENT_ID,
    redirectUrl: 'http://localhost:4200/login',
    SCOPES: [
      'user-read-recently-played',
      'user-top-read',
      'user-read-playback-position',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'streaming',
      'playlist-modify-public',
      'playlist-modify-private',
      'playlist-read-private',
      'playlist-read-collaborative',
      'user-library-modify',
      'user-library-read',
      'user-read-email',
      'user-read-private'
    ]
}