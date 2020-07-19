## React-Material-Dashboard

![license](https://img.shields.io/badge/license-MIT-blue.svg)

> React Dashboard made with [Material UI's](https://material-ui.com/) components, [React](https://reactjs.org/) via [create-react-app](https://facebook.github.io/create-react-app) originally forked from [Devias's React-Material-Dashboard](https://react-material-dashboard.devias.io/dashboard)

#### Demo

[Live site here!](https://andrewkeithly.github.io/react-material-dashboard)

## To Do

- [x] Re-setup fork to my preferred _best practices_
- [x] Deploy to github pages sub folder (this took too long admitting)
- [ ] Configure testing
- [ ] Create toggle-able themes
- [ ] Setup to work with [Firebase!](https://firebase.google.com/)
  - [x] Authentication with Email & Password
  - [ ] Authentication with Google & Facebook
  - [ ] C-R-U-D

## Quick start

- [Download from Github](https://github.com/andrewkeithly/react-material-dashboard/archive/master.zip) or clone the repo: `git clone https://github.com/andrewkeithly/react-material-dashboard.git`

- Make sure your NodeJS and npm versions are up to date for `React 16.8.6`

- Install dependencies: `npm install` or `yarn`

- [Create Firebase Project](https://console.firebase.google.com/) & add Authentication

  - Go to "Project Settings" > "General" > and grab your Firebase SDK snippet
  - Create `.env` file and add variables matching those found in `src/fbase.js`

- Start the server: `npm run start` or `yarn start`

- Views are on: `localhost:3000`

## Documentation

The documentation for the React Material Kit is can be found [here](https://material-ui.com).

## File Structure

Within the download you'll find the following directories and files:
(`.env` **Not Included**, you will need to create yourself – see [Quick Start](#Quick-Start))

```
material-react-dashboard

└── .vscode
│	├── extensions.json
│	├── launch.json
│	└── settings.json
├── .editorconfig
├── .env
├── .env.development
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── CHANGELOG.md
├── jsconfig.json
├── LICENSE.md
├── package.json
├── README.md
├── public
├── docs
└── src
	├── assets
	├── common
	├── components
	├── helpers
	├── icons
	├── layouts
	├── theme
	├── views
	│	├── Account
	│	├── Dashboard
	│	├── Icons
	│	├── NotFound
	│	├── ProductList
	│	├── Settings
	│	├── SignIn
	│	├── SignUp
	│	├── Typography
	│	└── UserList
	├── App.js
	├── App.test.js
	├── Auth.js
	├── fbase.js
	├── index.js
	└── Routes.js
	└── serviceWorker.js
```

## Reporting Issues:

- [Github Issues Page](https://github.com/andrewkeithly/react-material-dashboard/issues)

## License

- Licensed under MIT (https://github.com/andrewkeithly/react-material-dashboard/blob/master/LICENSE.md)
