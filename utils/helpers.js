import { AsyncStorage } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = 'FlashCard:notification1';

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
  return {
    title: 'Take a quiz!',
    body: "👋 don't forget to take a quiz for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let notificationTime = new Date()
              notificationTime.setDate(notificationTime.getDate() + 1)
              notificationTime.setHours(10)
              notificationTime.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: notificationTime,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}