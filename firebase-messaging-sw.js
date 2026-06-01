importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  databaseURL: "https://study-timer-2350b-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('バックグラウンドでメッセージを受信: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
