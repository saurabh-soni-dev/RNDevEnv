// New Project setup with TS


// #step1
// npx @react-native-community/cli@latest init AwesomeProject

// #step2 
// 1. cd ios to navigate to the ios folder.
// 2. bundle install to install Bundler
// 3. bundle exec pod install to install the iOS dependencies managed by CocoaPods.

// #step3 :(configrations for ts)
// Add 2 plugins:
// 1. yarn add --dev react-native-svg-transformer
// 2. yarn add --dev babel-plugin-module-resolver
// 3. yarn add react-native-svg

// All dev plugins are compulsory:
// "devDependencies": {
//     "@babel/core": "^7.20.0",
//     "@babel/preset-env": "^7.20.0",
//     "@babel/runtime": "^7.20.0",
//     "@react-native/babel-preset": "0.73.21",
//     "@react-native/eslint-config": "0.73.2",
//     "@react-native/metro-config": "0.73.5",
//     "@react-native/typescript-config": "0.73.1",
//     "@types/react": "^18.2.6",
//     "@types/react-native-star-rating": "^1.1.6",
//     "@types/react-native-video": "^5.0.20",
//     "@types/react-test-renderer": "^18.0.0",
//     "babel-jest": "^29.6.3",
//     "babel-plugin-module-resolver": "^5.0.0",
//     "eslint": "^8.19.0",
//     "jest": "^29.6.3",
//     "prettier": "2.8.8",
//     "react-native-svg-transformer": "^1.3.0",
//     "react-test-renderer": "18.2.0",
//     "typescript": "5.0.4"
//   },


// tsconfig.ts:
// {
//   "extends": "@react-native/typescript-config/tsconfig.json",
//   "compilerOptions": {
//     "baseUrl": ".",
//     "paths": {
//       "@imageIndex": ["./src/assets/imageIndex.ts"],
//       "@svgIndex": ["./src/assets/svgIndex.ts"],
//       "@components": ["./src/components/index.ts"],
//       "@hooks/": ["./src/hooks/"],
//       "@card": ["./src/components/cardIndex.ts"],
//       "@i18n/": ["./src/i18n/"],
//       "@navigation/": ["./src/navigation/"],
//       "@screenName": ["./src/navigation/screenName.ts"],
//       "@screens/": ["./src/screens/"],
//       "@redux/": ["./src/services/redux/"],
//       "@api/": ["./src/services/api/"],
//       "@config/": ["./src/services/config/"],
//       "@theme/": ["./src/theme/"],
//       "@utility/": ["./src/utility/"]
//     }
//   }
// }

// babelConfig:
// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
//   plugins: [
//     // ... other configs, if an array
//     [
//       'module-resolver',
//       {
//         extensions: [
//           '.ios.js',
//           '.android.js',
//           '.ios.jsx',
//           '.android.jsx',
//           '.js',
//           '.jsx',
//           '.json',
//           '.ts',
//           '.tsx',
//           '.style.ts',
//         ],
//         alias: {
//           '@imageIndex': './src/assets/imageIndex.ts',
//           '@svgIndex': './src/assets/svgIndex.ts',
//           '@components': './src/components/index.ts',
//           '@card': './src/components/cardIndex.ts',
//           '@hooks': './src/hooks',
//           '@i18n': './src/i18n',
//           '@navigation': './src/navigation',
//           '@screenName': './src/navigation/screenName.ts',
//           '@screens': './src/screens',
//           '@redux': './src/services/redux',
//           '@api': './src/services/api',
//           '@config': './src/services/config',
//           '@theme': './src/theme',
//           '@utility': './src/utility',
//         },
//       },
//     ],
//     // 'react-native-reanimated/plugin',
//   ],
// };

// metroConfig:
// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
// const defaultConfig = getDefaultConfig(_dirname);
// const {assetExts, sourceExts} = defaultConfig.resolver;
// /**
//  * Metro configuration
//  * https://facebook.github.io/metro/docs/configuration
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {
//   transformer: {
//     babelTransformerPath: require.resolve('react-native-svg-transformer'),
//   },
//   resolver: {
//     assetExts: assetExts.filter(ext => ext !== 'svg'),
//     sourceExts: [...sourceExts, 'svg'],
//   },
// };

// module.exports = mergeConfig(getDefaultConfig(_dirname), config);

// #step4 : (for using svg direct)
// // To Use svg file in app, you need to add it as a resource.
// declare module '*.svg' {
//   import React from 'react';
//   import {SvgProps} from 'react-native-svg';
//   const content: React.FC<SvgProps>;
//   export default content;
// }

// #step5:
// navigations hook:
// import {RootStackParams} from '@navigation/stacks/rootStackParams';
// import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// export const useAuthNavigation = <
//   T extends keyof RootStackParams = keyof RootStackParams,
// >(
//   values?: T,
// ): NativeStackNavigationProp<RootStackParams, T> => {
//   const navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParams, T>>();
//   return navigation;
// };

// export const useAuthRoute = <
//   T extends keyof RootStackParams = keyof RootStackParams,
// >(
//   values?: T,
// ): RouteProp<RootStackParams, T> => {
//   const route = useRoute<RouteProp<RootStackParams, T>>();
//   return route;
// };

// redux hook:
// import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
// import {AppDispatch, RootState} from '@redux/store';

// // Use throughout your app instead of plain useDispatch and useSelector
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// #step6:
// add navigations ref in utility:

// import { CommonActions } from '@react-navigation/native';
// import * as React from 'react';

// export const navigationRef = React.createRef();

// export function navigate(name, params) {
//   navigationRef.current?.navigate(name, params);
// }
// export function goBack() {
//   navigationRef.current?.goBack();
// }

// export function navigateAndReset(routes = [], index = 0) {
//   navigationRef.current?.dispatch(
//     CommonActions.reset({
//       index,
//       routes,
//     }),
//   );
// }

// export function navigateAndSimpleReset(name, index = 0) {
//   navigationRef.current?.dispatch(
//     CommonActions.reset({
//       index,
//       routes: [{name}],
//     }),
//   );
// }

// #step7 : (Add stack nav)
// screenName.ts:
// export default {
//     login: 'Login',
//     home: 'Home',
// }

// index.tsx:
// import {NavigationContainer} from '@react-navigation/native';
// import React, {FC} from 'react';
// import {navigationRef} from '../utility/navigationSevices';
// import RootStack from './stacks/RootStack';

// const Route: FC = () => {
//   return (
//     <NavigationContainer ref={navigationRef}>
//       <RootStack />
//     </NavigationContainer>
//   );
// };

// export default Route;

// stacks folder:
// const:
// import Login from '../../screens/auth/login/Login';
// import {Home} from '../../screens/home';
// import screenName from '../screenName';

// export const rootStackScreen = [
//   {
//     name: screenName.home,
//     Component: Home,
//   },
//   {
//     name: screenName.login,
//     Component: Login,
//   },
// ];

// RootStack.tsx:
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import React, {FC} from 'react';
// import {rootStackScreen} from './rootStack.const';

// const Stack = createNativeStackNavigator();
// const RootStack: FC = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="Login"
//       screenOptions={{
//         headerShown: false,
//         presentation: 'card',
//       }}>
//       {rootStackScreen?.map(screen => (
//         <Stack.Screen
//           key={screen.name}
//           name={screen?.name}
//           component={screen?.Component}></Stack.Screen>
//       ))}
//       <></>
//     </Stack.Navigator>
//   );
// };

// export default RootStack;

// rootStackParams.d.ts:
// export type RootStackParams = {
//   Login: undefined;
//   Home: undefined;
// };