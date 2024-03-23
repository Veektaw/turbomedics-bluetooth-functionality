These are the commands i ran to get the project started

`npx expo install react-native-ble-plx` this will install the library used for the bluetooth connection, which will also add the config in the `app.json`

`npx expo install device`  this allows us to get the API version of android 

`npx expo install react-native-base64` this allows us to decode the information that will be sent to the bluetooth device

<span style="text-transform: capitalize;">I changed the eas.json file to allow native modules to be built</span>

`npx npm install eas-cli` this is for the custom builds

`npx expo prebuild` this exposes the native modules, that is, it creates the iOS and android folders, then add the permissions in the `app.json` file

`npx expo install expo-dev-client` to install the client for development when your APK is being tested, it creates the server for the custom builds.


<span style="text-transform: capitalize; font-weight: bold;"">FOR ANDROID</span>

When you run these commands, the APK for android will be created, if you want to test it on your simulator, simply run `npx expo run:android` this will push the APK to your simulator and run it as a dev client.

If you want to run it on your  `android` phone so you can use the bluetooth functionality, first move the APK file that was built and install it on your phone, then run `npx expo run:android` after running it, press `a` this will now build the app and run it as a dev client.

<span style="text-transform: capitalize;">IMPORTANT</span>
Make sure your phone is connected via USB to use the dev client.

<span style="text-transform: capitalize; font-weight: bold;"">FOR iOS</span>

`eas build --profile development --platform ios` this will build the app on expo servers, a QR code will be sent to you to get the app on iphone.