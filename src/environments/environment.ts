// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: 'AIzaSyBKb3Uju1AUWO3BoGZLMTlbnGi83H-V7XE',
    authDomain: 'airbnb-team2.firebaseapp.com',
    projectId: 'airbnb-team2',
    storageBucket: 'airbnb-team2.appspot.com',
    messagingSenderId: '986153956513',
    appId: '1:986153956513:web:8972b9de27010b5672ece0',
  },
  baseApiUrl: 'http://airbnb-dev.us-east-1.elasticbeanstalk.com/api',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
