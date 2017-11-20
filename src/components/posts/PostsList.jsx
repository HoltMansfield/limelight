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
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
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
