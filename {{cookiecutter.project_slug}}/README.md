# {{cookiecutter.project_name}}

{{cookiecutter.description}}

<br />

<div align="center">
  <!-- Dependency Status -->
  <a href="https://david-dm.org/{{cookiecutter.github_user}}/{{cookiecutter.github_repo}}">
    <img src="https://david-dm.org/{{cookiecutter.github_user}}/{{cookiecutter.github_repo}}.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/{{cookiecutter.github_user}}/{{cookiecutter.github_repo}}#info=devDependencies">
    <img src="https://david-dm.org/{{cookiecutter.github_user}}/{{cookiecutter.github_repo}}/dev-status.svg" alt="devDependency Status" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/{{cookiecutter.github_user}}/{{cookiecutter.github_repo}}">
    <img src="https://travis-ci.org/{{cookiecutter.github_user}}/{{cookiecutter.github_repo}}.svg" alt="Build Status" />
  </a>
  <!-- Test Coverage -->
  <a href="https://coveralls.io/r/{{cookiecutter.github_user}}/{{cookiecutter.github_repo}}">
    <img src="https://coveralls.io/repos/github/{{cookiecutter.github_user}}/{{cookiecutter.github_repo}}/badge.svg" alt="Test Coverage" />
  </a>
</div>

<br />

## Quick start

1.  Make sure that you have Node v8 or above installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/{{cookiecutter.github_user}}/{{cookiecutter.github_repo}}.git`
3.  Move to the appropriate directory: `cd react-boilerplate`.<br />
4.  Run `yarn setup` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `yarn start` to see the example app at `http://localhost:3000`._
5.  Run `npm run clean` to delete the example app.

> Please note that this boilerplate is **production-ready and not meant for beginners**! If you're just starting out with react or redux, please refer to https://github.com/petehunt/react-howto instead. If you want a solid, battle-tested base to build your next product upon and have some experience with react, this is the perfect start for you.

## Documentation

- [**The Hitchhikers Guide to `react-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
- [Overview](docs/general): A short overview of the included tools
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
- [**Troubleshooting**](docs/general/gotchas.md): Solutions to common problems faced by developers.

## License

This project is licensed under the MIT license, Copyright (c) 2018 {{cookiecutter.author_name}}
Stoiber. For more information see `LICENSE.md`.
