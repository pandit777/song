import { AlbumController, ArtistController, SearchController, SongController } from '#modules/index'
import { PlaylistController } from '#modules/playlists/controllers'
import { handle } from 'hono/vercel'
import { App } from './app'

const appInstance = new App([
  new SearchController(),
  new SongController(),
  new AlbumController(),
  new ArtistController(),
  new PlaylistController()
]).getApp()

// Vercel Serverless environment के लिए Hono instance को handle() में रैप करके एक्सपोर्ट करें
export default handle(appInstance)
