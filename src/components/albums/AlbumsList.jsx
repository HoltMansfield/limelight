import React, { Component } from 'react'
import { Row, Col, Glyphicon, Well } from 'react-bootstrap'


export class AlbumsList extends Component {
  getAlbums() {
    return this.props.albums.map((album, index) => {
      return <div onClick={() => this.props.selectAlbum(index)}
                  style={{ textAlign: 'left' }}
                  className="margin-bottom-10 clickable"
                  title="View Photos"
                  key={album.id}>
               <span className="margin-right-10">{ album.title } ({ album.photos.length } Photos)</span>
               <Glyphicon glyph="eye-open" className="clickable" />
             </div>
    })
  }

  render() {
    return (
      <Row className="show-grid margin-bottom-10">
        <Col>
          <Well>
            { this.getAlbums() }
          </Well>
        </Col>
      </Row>
    )
  }
}

export default AlbumsList
