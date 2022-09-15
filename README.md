# Job Portal App

The present React app is a job portal that allow to different classes of IT professionals (Designers, Developers, Product Managers, among others) browse and apply to jobs at the U.S that match their profiles. The [live version](https://job-portal-app-it.netlify.app/) is available here.

## Design

The design was done before the development phase, having in mind Material Design and more specifically, the Material UI components. At the end, there were some minor changes in the UI, but the original idea was heavily respected. The design files can be checked at [Figma](https://www.figma.com/file/Uxs8idY7VUCjLlsciNKJk7/Job-Portal?node-id=0%3A1).

## Features

In the initial view, users can view the list of IT available jobs. The data is pulled from the Devitjobs API, so in any given time, there are over 600 tech jobs. However, user don't need to see all the jobs at the same time. Therefore, a button was placed at the end of the site, for loading job posts on demand.

![General Jobs](https://dl.dropboxusercontent.com/s/77yxkdvp0k56znr/Job-Portal-Image-1.png?dl=0)

Moreover, the app have other capabilities. If a person want to save a job post, he can press the like button, and it will be persisted in the Local Storage. Users can see the list of liked jobs in another view of the app. On the other hand, each card have a details button, where the complete description of the job is rendered.

![Details](https://dl.dropboxusercontent.com/s/6s5qw2s8ndrcc3a/Job-Portal-Image-3.png?dl=0)

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

A CI/CD (Continous Integration and Continuous Deployment) pipeline was developed using GitHub Actions. Whenever there is a push at the master branch, the CI/CD flow is triggered. This type of pipelines are very useful for catching bugs before they make to the production enviroment. Also, notifications are usually relevant, for catching the attention of developers regarding the issues.
 
![CI/CD Pipeline](https://dl.dropboxusercontent.com/s/o3q6di2t2ph8xzc/Pipeline%20Image.png?dl=0)

## Future improvements 

When React apps start to grow, using the internal `Context` API (in combination with `useState` or `useReducer` hooks) to manage the global state could arise some performance problems, since each change in a state variable trigger a re-render in the whole app. In the case of the present app, it would be a great idea to move global state managament into a more battle-tested solution, like Redux or MobX, for avoiding this kind of issues in the future. 
