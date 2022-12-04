const fetch = require('isomorphic-unfetch')
const { getData, getPreview, getTracks, getDetails } = require('spotify-url-info')(fetch)

async function embedSong(url) {
  data = await getPreview(url)
  id =  data.embed.slice(-22)
  embed = "https://open.spotify.com/embed/track/" + id +"?utm_source=generator"
  return embed  
}

async function dataMusic(url) {
  data = await getPreview(url)
  return data
}

module.exports = { dataMusic, embedSong }