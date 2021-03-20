## How to install
yarn install

## Android

only the first time you run the project, you need to generate a debug key with:
cd android/app
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
cd ../.. to come back to the root folder
yarn start to start the metro bundler, in a dedicated terminal
yarn android to run the Android application (remember to start a simulator or connect an Android phone)
## iOS

cd ios
pod install to install pod dependencies
cd .. to come back to the root folder
yarn start to start the metro bundler, in a dedicated terminal
yarn ios to run the iOS application (remember to start a simulator or connect an iPhone phone)