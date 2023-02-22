# GitHub Blog

GitHub Blog is a project that consumes the GitHub Issues API.

## Stacks 

* ReactJS
* TypeScript

### Libraries

* Axios
* React Hook Form
* React Markdown
* React Router Dom
* Styled Components
* Date FNS
* Zod

## API GitHub

### GET all issues
```
https://api.github.com/search/issues?q=repo:{user}/{repositorie} is:issue
```

### Search issues
```
https://api.github.com/search/issues?q=${query} repo:{user}/{repositorie} is:issue
```

### GET an issue
```
https://api.github.com/repos/{user}/{repositorie}/issues/{Issue Number}
```



## Installation

* Node, NPM, And Expo Required

* Clone the project with 

```
git clone https://github.com/jvdsantos3/todo-app.git
```

* Install as dependencies with 

```
npm install or npm i
```
