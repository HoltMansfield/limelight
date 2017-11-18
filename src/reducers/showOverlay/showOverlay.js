const initialState = false

const ShowOverlay = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_OVERLAY':
      return true
    case 'HIDE_OVERLAY':
        return false
    default:
      return state
  }
}

export default ShowOverlay
