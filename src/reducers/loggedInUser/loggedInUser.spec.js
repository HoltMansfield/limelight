import loggedInUser from './loggedInUser'


describe('loggedInUser reducer', () => {
  const initialState = null

  it('should handle initial state', () => {
    expect(loggedInUser(initialState, {})).toEqual(initialState)
  })
})
