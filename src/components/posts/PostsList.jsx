import React, { Component } from 'react'
import { Collapse, Well, Panel } from 'react-bootstrap'


export class PostsList extends Component {
  isPostOpen(index) {
    return this.props.posts[index].open
  }

  getPosts() {
    if(!this.props.posts) {
      return null
    }

    return this.props.posts.map((post, index) => {
      return <Well key={post.id} onClick={() => this.props.openPost(index)}>
              <div className="margin-bottom-10">
                {post.title} ({ post.comments.length } Comments)
              </div>
              <Collapse in={this.isPostOpen(index)}>
                <Panel>
                  { post.body }
                </Panel>
              </Collapse>
             </Well>
    })
  }

  render() {
    return (
      <div>
        { this.getPosts() }
      </div>
    )
  }
}

export default PostsList
