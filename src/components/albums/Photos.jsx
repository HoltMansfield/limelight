import React, { Component } from 'react'
import { Modal, Button, Image } from 'react-bootstrap'

export class Photos extends Component {
  getPhotos() {
    return this.props.photos.map(photo => {
      return <div key={photo.id} className="pull-left margin-bottom-10 margin-right-10">
              <Image src={photo.thumbnailUrl} rounded />
            </div>
    })
  }

  getModal() {
    const styles = {
      height: '400px',
      overflow: 'scroll'
    }

    return <Modal.Dialog show={this.props.show.toString()} >
            <Modal.Body>
              <div style={styles}>
                { this.getPhotos() }
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={() => this.props.close()}>Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
  }

  render() {
    if(this.props.show) {
      return this.getModal()
    }

    return null
  }
}

export default Photos
