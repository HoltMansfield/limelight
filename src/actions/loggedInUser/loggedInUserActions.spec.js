import * as actions from '../'

describe('loggedInUser actions', () => {
  it('setLoggedInUser should create SET_USER action', () => {
    const expected = {};

    expect(actions.setLoggedInUser(expected)).toEqual({
      type: 'SET_USER',
      user: expected
    })
  })
})
