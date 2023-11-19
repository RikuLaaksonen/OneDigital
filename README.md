######## First Typescipt Task#########

Is at band.ts, it console.logs the comparison and tells that it is a match 
here is also the stackblitz link (https://typescript-z6che1.stackblitz.io)


######### Second task for the Dialog component  ############

# OneDigitalDialog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## dialog-component

All the code to the dialog.component you will find at dialog/folder. 

dialog.component.html has the basic html for the dailog component with some additional accessibilty
dialog.component.ts handels the component, like closing, what it needs and so on 
dialog.component.css has some basic styling, nothing fancy, just to get the hold of it. 

## app.component

The app.component.html contains the buttons to open the dialog.component (app-dialog) and the app-dialog. 
app.component.ts file handles some basic things and also the submit for the form. There isn't any logic building how it handles the data from the form, just to show that it is possible to
close app-dialog by calling onClose from dialog.component.ts 
There are no styling in app.component.ts
app.module.ts contains the imports, declarations and so on. 


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


