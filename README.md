# React Native Movie Example application

## Introduction

https://www.youtube.com/watch?v=f8Z9JyB2EIE

New features, that make React Native now fast:

- JSI
- TurboModolus
- Fabric

NativeWind --> TailWindCSS for ReactNative
Flexbox by default - View

Touchable components for buttons

FlatList - long lists of items that needs to be scrolled
ScrollView - like overflow in HTML
SafeAreaZone

react-native-safe-area-context

Image, ImageBackground
react-native-svg
Switch

---

## Setting up the styling

To install TailWindCSS to the project, jsut follow through:
https://www.nativewind.dev/docs/getting-started/installation

If you are changing the place of the `global.css`, then make sure, that you are
setting it in the `tailwind.config.js`.

Also you can add the custom colors to the theme in the `tailwind.config.js`.
Watch https://www.youtube.com/watch?v=6biMWgD6_JY to make sure you are on top of
your Tailwind CSS game, if you need it.

---

## Adding routing

create onboardin.tsx
use snippet to populate w/ styles
add a link properly from expo routing

movie/[id],tsx - dynamic routing
[useLocalSearchParams()](https://docs.expo.dev/router/reference/url-parameters/)

---

add proper video playing for the trailer for the Squid Game
add profile with authentication as a next step
routing grouping

(tabs)/profile, /search /index, \_layout.tsx
movie/[id].tsx

into the root layout make sure to add the <stack> and <stack.screen> to hide the header of the group

into the grup layout add the tabs from expo and hide the header there as well
tabs adds bottom navigation!
tabs.screen

replace the assets

customizing the tabs
