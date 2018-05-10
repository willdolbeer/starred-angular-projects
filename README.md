# StarredAngularProjects

## Description

This project retrieves and displays the Angular-related repositories with the most stars. It was built using [Angular](https://github.com/angular/angular) 6.0.0, [Bootstrap](https://github.com/twbs/bootstrap) 4.1.1 and [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap). Due the small size of this project, the following considerations were taken:

- A flat file structure was used
- `RouterModule` config was included in `app.module.ts` instead of a separate file
- All CSS is contained in a single `style.css` instead of bundling styles for each component

The two project components contain identical functions. This was done to make use of multiple views using the Angular router.

## Prerequisites

Install the latest version of [Angular CLI](https://github.com/angular/angular-cli)

## Installation

To install on your local machine, run the following from the command line:

    git clone https://github.com/willdolbeer/starred-angular-projects.git
    cd starred-angular-projects
    npm install
    
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
