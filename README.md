# stat-tracker

[![Build status][appveyor-image]][appveyor-url]
[![Dependency Status][david-image]][david-url]
[![devDependency Status][david-dev-image]][david-dev-url]

## Summary

stat-tracker is an app designed to present data in a simple, yet highly customizable way.

## Motivation

As a tabletop enthusiast, I wanted a straightforward means by which I can track basic statistics about my characters without having to provide every detail about my character up front.

This app serves to enable users to track as much or as little information as they want without getting in the way.

## Getting Started

```bash
npm install
npm start
```

## Built with

- [Create-React-App][create-react-app-url] with [TypeScript][create-react-app-ts-url]
- [React][react-url]
- [Redux][redux-url]
- [Reselect][reselect-url]
- [Material-UI][material-ui-url]
- [React-Grid-Layout][react-grid-layout-url]

## Features

- Statistics
  - Counter
    - Increment/decrement value
    - Optional description
    - Optional minimum/maximum value enforcement
    - Optional maximum display value (may vary from actual maximum value)
- StatList
  - Display multiple Counter statistics
  - Dynamically add and remove Counter statistics

## Planned Features

- Statistics
  - Calculation
    - Aggregates multiple statistics
  - Reset
    - Reset specified statistics to their default value
  - Fact
    - Display reference information
    - Long-press to see a more detailed description
  - Toggle
    - Toggle between different states in order to affect other statistics
- GridView
  - Rearrange your dashboard

## License

All rights reserved © [Eddie Olson][olsonek-url]

[appveyor-image]: https://ci.appveyor.com/api/projects/status/y8kgs2k0bx8sl8yl/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/olsonek/stat-tracker/branch/master
[david-dev-image]: https://david-dm.org/olsonek/stat-tracker/dev-status.svg
[david-dev-url]: https://david-dm.org/olsonek/stat-tracker?type=dev
[david-image]: https://david-dm.org/olsonek/stat-tracker/status.svg
[david-url]: https://david-dm.org/olsonek/stat-tracker
[olsonek-url]: https://github.com/olsonek

[create-react-app-url]: https://github.com/facebook/create-react-app
[create-react-app-ts-url]: https://github.com/wmonk/create-react-app-typescript
[react-url]: https://reactjs.org
[redux-url]: https://redux.js.org
[reselect-url]: https://github.com/reactjs/reselect
[material-ui-url]: http://www.material-ui.com
[react-grid-layout-url]: https://github.com/STRML/react-grid-layout