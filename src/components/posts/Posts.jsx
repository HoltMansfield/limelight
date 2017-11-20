import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import * as actions from '../../actions'
import { Search } from './Search'
import { PostsList } from './PostsList'

export class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = { posts: null, comments: null, searchTerms: '' }
    this.updateSearch = this.updateSearch.bind(this)
    this.openPost = this.openPost.bind(this)
  }

  mergeData(posts, comments) {
    const postsWithComments = posts.map(post => {
      post.comments = comments.filter(comment => comment.postId === post.id)
      return post
    })

    return postsWithComments
  }

  componentWillMount() {
    const setState = this.setState.bind(this)
    const { getPosts, getComments } = this.props

    Promise.all([getPosts(), getComments()])
      .then(values => {
        const postsWithComments = this.mergeData(values[0], values[1])
        setState({ posts: postsWithComments })
      })
  }

  openPost(indexOfPostToOpen) {
    const posts = this.state.posts.map((post, index) => {
      if(index === indexOfPostToOpen) {
        post.open = !post.open
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
      const matchesTitle = post.title.indexOf(searchTerms) !== -1
      const matchesBody = post.body.indexOf(searchTerms) !== -1

      return (matchesTitle || matchesBody)
    })

    return filteredPosts
  }

  render() {
    return (
      <Grid>
        <Search updateSearch={this.updateSearch} />
        <PostsList posts={this.filterPosts()} openPost={this.openPost} />
      </Grid>
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
