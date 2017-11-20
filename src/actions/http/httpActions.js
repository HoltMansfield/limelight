import axios from 'axios'
import { notify } from 'react-notify-toast'
import { myConfig } from '../../config.js'


const getErrorMessage = result => {
  // check result for error messages in expected format

  return 'Server is down'
}

const displayError = (data, dispatch) => {
  const errorMessage = getErrorMessage(data)

  notify.show(errorMessage, 'error', 2500)
  throw new Error(errorMessage)
}

export const httpGet = (url, _options) => {
  return dispatch => {
    return axios.get(`${myConfig.apiUrl}/${url}`)
      .then(response => response.data)
      .catch(data => displayError(data, dispatch))
  }
}

export const httpPut = (url, data, _options) => {
  return dispatch => {
    return axios.put(`${myConfig.apiUrl}/${url}`, data)
      .then(response => response.data)
      .catch(data => displayError(data, dispatch))
  }
}

export const httpPost = (url, data, _options) => {
  return dispatch => {
    return axios.post(`${myConfig.apiUrl}/${url}`, data)
      .then(response => response.data)
      .catch(data => displayError(data, dispatch))
  }
}

export const httpDelete = (url, _options) => {
  return dispatch => {
    return axios.delete(`${myConfig.apiUrl}/${url}`)
      .then(response => response.data)
      .catch(data => displayError(data, dispatch))
  }
}
