const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

export const setNotification = (notification, time=10) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      notification: notification
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        notification: ''
      })
    }, time * 1000)
  }
}

export default notificationReducer