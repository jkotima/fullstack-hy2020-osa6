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

    if (window.localStorage.getItem('notificationTimeOutID')) {
      clearTimeout(window.localStorage.getItem('notificationTimeOutID'))
    }

    const timeOutID = setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        notification: ''
      })
      window.localStorage.removeItem('notificationTimeOutID')
    }, time * 1000)

    window.localStorage.setItem('notificationTimeOutID', timeOutID)
  }
}

export default notificationReducer