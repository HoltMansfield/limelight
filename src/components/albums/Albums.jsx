import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

export class Albums extends Component {
  constructor(props) {
    super(props)
    this.state = { albums: null, ascending: true }
  }

  mergeData(albums, photos) {
    const albumsWithPhotos = albums.map(album => {
      album.photos = photos.filter(photo => photo.albumId === album.id)
      return album
    })

    return albumsWithPhotos
  }

  componentWillMount() {
    const mergeData = this.mergeData
    const setState = this.setState.bind(this)
    const { getAlbums, getPhotos } = this.props

    Promise.all([getAlbums(), getPhotos()])
      .then(values => {
        const albumsWithPhotos = mergeData(values[0], values[1])
        setState({ albums: albumsWithPhotos })
      })
  }

  render() {
    return (
      <div>albums</div>
    )
  }
}

export default connect(
  state => { return {

      }
    },
  dispatch => { return {
        getAlbums: () => dispatch(actions.httpGet('albums')),
        getPhotos: () => dispatch(actions.httpGet('photos'))
      }
    },
)(Albums)
