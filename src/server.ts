import { AlbumController, ArtistController, SearchController, SongController } from '#modules/index'
import { PlaylistController } from '#modules/playlists/controllers'
import { App } from './app'

const appInstance = new App([
  new SearchController(),
  new SongController(),
  new AlbumController(),
  new ArtistController(),
  new PlaylistController()
]).getApp()

// Vercel को Hono इंस्टेंस के डिफ़ॉल्ट निर्यात की आवश्यकता है, handle() से रैप न करें
export default appInstance
