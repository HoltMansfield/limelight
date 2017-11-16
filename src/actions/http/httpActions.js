import axios from 'axios'
import { notify } from 'react-notify-toast'
import { myConfig } from '../../config.js'
import { showOverlay, hideOverlay } from '../overlay/overlayActions'


const getErrorMessage = result => {
  if(result.response && result.response.data && result.response.data.message) {
    return result.response.data.message
  }

  return 'Server is down'
}

const displayError = (data, dispatch) => {
  const errorMessage = getErrorMessage(data)

  // setTimeout fixes a flicker with the overlay being displayed for very fast http cals
  setTimeout(() => {
    dispatch(hideOverlay())
  }, 300)

  notify.show(errorMessage, 'error', 2500)
  throw new Error(errorMessage)
}

const doHideOverlay = (dispatch) => {
  setTimeout(() => {
    dispatch(hideOverlay())
  }, 300)
}

const getOptions = (options) => {
  if(!options) {
    options = {}
  }

  if(!options.useOverlay) {
    options.useOverlay = true
  }

  return options
}

export const httpGet = (url, _options) => {
  const options = getOptions(_options)

  return dispatch => {
    if(options.useOverlay) dispatch(showOverlay())

    return axios.get(`${myConfig.apiUrl}/${url}`)
      .then(response => {
        doHideOverlay(dispatch)
        return response.data;
      })
      .catch(data => displayError(data, dispatch))
  }
}

export const httpPut = (url, data, _options) => {
  const options = getOptions(_options)

  return dispatch => {
    if(options.useOverlay) dispatch(showOverlay())

    return axios.put(`${myConfig.apiUrl}/${url}`, data)
      .then(response => {
        doHideOverlay(dispatch)
        return response.data;
      })
      .catch(data => displayError(data, dispatch))
  }
}

export const httpPost = (url, data, _options) => {
  const options = getOptions(_options)

  return dispatch => {
    if(options.useOverlay) dispatch(showOverlay())

    return axios.post(`${myConfig.apiUrl}/${url}`, data)
      .then(response => {
        doHideOverlay(dispatch)

        return response.data
      })
      .catch(data => displayError(data, dispatch))
  }
}

export const httpDelete = (url, _options) => {
  const options = getOptions(_options)

  return dispatch => {
    if(options.useOverlay) dispatch(showOverlay())

    return axios.delete(`${myConfig.apiUrl}/${url}`)
      .then(response => {
        doHideOverlay(dispatch)
        return response.data;
      })
      .catch(data => displayError(data, dispatch))
  }
}

export const httpSetToken = token => {
  return dispatch => {
    if(token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    } else {
      throw new Error('A Valid JWT Token is required')
    }
  }
}

export const httpClearToken = () => {
  return dispatch => {
    axios.defaults.headers.common['Authorization'] = ''
    localStorage.removeItem('jwt')
  }
}
