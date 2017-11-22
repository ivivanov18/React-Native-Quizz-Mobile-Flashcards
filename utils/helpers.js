import { Notifications, Permissions } from 'expo'
import {AsyncStorage} from 'react-native'


const NOTIFICATION_KEY = 'MobileFlashcards:notifications'

export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }
  
  function createNotification () {
    return {
      title: 'Time to train',
      body: "You did not train today! Go on and improve yourself!",
      ios: {
        sound: true,
      }
    }
  }
  
  export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()

                let today = new Date()
                today.setDate(today.getDate())
                today.setHours(20)
                today.setMinutes(30)
  
                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: today,
                    repeat: 'day',
                  }
                )
  
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
        }
      })
  }
