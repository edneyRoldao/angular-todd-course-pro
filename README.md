# angular-todd-course-pro

Angular course - It is an advanced made by Todd Motto

### branch: 0-project-seed
- This project contains the minimum requirements to start coding with angular via cli
- the only thing you need to do is change projectName
- Bootstrap version 4.0 is already included

### branch: 1-get-source-code
- to start this study we need to get the source code from course that I've made but, isn't that simple cause 
  I'm using cli and the course uses yarn

### branch: 2-content-projection
- we can html inside our tab components.
- see html from app.component
- inside the component that will have html injected, we need to define where html will sits in
- see line  from auth-form.component

### branch: 3-content-projection-with-slots
- we can hook up html into a component via ng-content and select attribute that works as query-selector
- step by step:
    - inside the component add a tab ng-content where you want content to be injected and use query-selector to match.

### 4-projecting-and-binding-components
- we can use select attr from ng-content to bind components as well
- don't forget to register component at module and exports it.

### 5-contentChild-ngAfterContentInit
- we can get a reference to component that will be injected into ng-content via contentChildDecorator
    - step 1: we have a condition that will change depending on checked attribute inside another component
    - step 2: Lets use decorator mentioned before and get the component to be injected
    - step 3: implements interface AfterContentInit
    - step 4: implement function ngAfterContentInit
    
### 6-contentChildren-and-queryLists
- It works similarly at previous branch, but instead of dealing with just one component you can handle an array of components