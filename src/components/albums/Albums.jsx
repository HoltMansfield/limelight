import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import * as actions from '../../actions'
import { AlbumsList } from './AlbumsList'
import { Sort } from './Sort'
import { Photos } from './Photos'


export class Albums extends Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: null,
      ascending: true,
      showModal: false,
      selectedAlbumIndex: 0
    }
    this.updateSort = this.updateSort.bind(this)
    this.selectAlbum = this.selectAlbum.bind(this)
    this.setState = this.setState.bind(this)
    this.close = this.close.bind(this)
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

  getAlbums() {
    if(!this.state.albums) {
        return []
    }

    let sortedAlbums;

    if(this.state.ascending) {
      sortedAlbums = this.state.albums.sort((a, b) => {
        if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;

        return 0;
      })
    } else {
      sortedAlbums = this.state.albums.sort((a, b) => {
        if(a.title > b.title) return -1;
        if(a.title < b.title) return 1;

        return 0;
      })
    }

    return sortedAlbums
  }

  updateSort(ascending) {
    this.setState({ ascending })
  }

  getSelectedPhotos() {
    if(!this.state.albums) {
      return []
    }

    return this.state.albums[this.state.selectedAlbumIndex].photos
  }

  selectAlbum(selectedAlbumIndex) {
    this.setState({ selectedAlbumIndex, showModal: true })
  }

  close() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Grid>
        <Sort updateSort={this.updateSort} isSortAscending={this.state.ascending} />
        <AlbumsList albums={this.getAlbums()} selectAlbum={this.selectAlbum} />
        <Photos photos={this.getSelectedPhotos()} show={this.state.showModal} close={this.close} />
      </Grid>
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
