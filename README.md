# Job Portal App

The present React app is a job portal that allow to different classes of IT professionals (Designers, Developers, Product Managers, among others) browse and apply to jobs at the U.S that match their profiles. The live version is available at ()[https://job-portal-app-it.netlify.app/]

## Design

The design was done before the development phase, having in mind Material Design and more specifically, the Material UI components. At the end there were some minor changes in the UI, but the original idea was heavily respected. The design files can be checked at [Figma](https://www.figma.com/file/Uxs8idY7VUCjLlsciNKJk7/Job-Portal?node-id=0%3A1).

## Features

## Tech Stack

The following technologies were used in the process of building the client-side app:

- React
- React-Router
- Material UI
- Boring Avatars
- React-Query
- Context
- Devitjobs API
- GitHub Actions

## CI/CD

## Future improvements 

When React apps start to grow, using the internal `Context` API (in combination with `useState` or `useReducer` hooks) to manage the global state could arise some performance problems, since each change in a state variable trigger a re-render in the whole app. In the case of the present app, it would be a great idea to move global state managament into a more battle-tested solution, like Redux or MobX, for avoiding this kind of issues in the future. 
