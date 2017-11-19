import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Collapse, Well } from 'react-bootstrap'
import * as actions from '../../actions'
import { Search } from './Search'

export class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = { posts: null, comments: null, searchTerms: '' }
    this.updateSearch = this.updateSearch.bind(this)
  }

  componentWillMount() {
    const setState = this.setState.bind(this)

    this.props.getComments()
      .then(comments => {
        this.props.getPosts()
          .then(posts => {
            posts = posts.map(post => {
              post.open = false
              return post
            })
            setState({ posts, comments })
          })
      })
  }

  isPostOpen(index) {
    return this.state.posts[index].open
  }

  getCommentCount(index) {
    const id = this.state.posts[index].id
    return this.state.comments.filter(comment => comment.postId === id).length
  }

  openPost(postToOpen) {
    const posts = this.state.posts.map((post, index) => {
      if(index === postToOpen) {
        post.open = true
      } else {
        post.open = false
      }

      return post
    })

    this.setState({ posts })
  }

  updateSearch(searchTerms) {
    this.setState({ searchTerms })
  }

  filterPosts() {
    const { searchTerms } = this.state

    if(!searchTerms.length) {
      return this.state.posts
    }

    const filteredPosts = this.state.posts.filter(post => {
      const matchesTitle = post.title.indexOf(searchTerms) != -1
      const matchesBody = post.body.indexOf(searchTerms) != -1

      if(matchesTitle || matchesBody) {
        return post
      }
    })

    return filteredPosts
  }

  getPosts() {
    const matchingPosts = this.filterPosts()

    if(!matchingPosts) {
      return null
    }

    return matchingPosts.map((post, index) => {
      return <div>
              <div onClick={() => this.openPost(index)}>
                {post.title} ({ this.getCommentCount(index) } Comments)
              </div>
                <Collapse in={this.isPostOpen(index)}>
                  <div>
                    <Well>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </Well>
                  </div>
                </Collapse>
             </div>
    })
  }

  render() {
    return (
      <div>
        <Search updateSearch={this.updateSearch} />
        <div>
          { this.getPosts() }
        </div>
      </div>
    )
  }
}

export default connect(
  state => { return {

      }
    },
  dispatch => { return {
        getPosts: () => dispatch(actions.httpGet('posts')),
        getComments: () => dispatch(actions.httpGet('comments'))
      }
    },
)(Posts)
