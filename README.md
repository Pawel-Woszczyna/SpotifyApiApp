For project to work you have to create file "secret&client_id.ts" in folder "Environments". Its structure should look like this:

//

export const secretnClientID = { CLIENT_ID: '', CLIENT_SECRET: '' }

//

In the quotes you should put your own CLIENT_ID and CLIENT_SECRET that you can generate right here: https://developer.spotify.com/dashboard.

After you opened spotify dashboard you have to create an app and then go to settings where you can find CLIENT_ID and CLIENT_SECRET.
