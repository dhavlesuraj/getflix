/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/coming-soon` | `/(tabs)/download` | `/(tabs)/more` | `/(tabs)/search` | `/..\components\HomeBanner` | `/_sitemap` | `/apiCall` | `/coming-soon` | `/download` | `/more` | `/search`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
