# OEme - An Angular Material 2 based application template

This project was initiated as a playground for building next generation UI framework of our internal projects. You can consider it as an Angular 2 admin dashboard template, or an example of fully working web app (no server logic & api & database provided obviously).

Feel free to play and contribute!

## Disclaimer

I'm a C# developer, **not** a javascript-born guru; although with extensive level experience/knowledge of front-end development, I am no near as an expert bird flying among Angular, Angular 2 or any front-end/client-side driven technologies. 

This project started as an experiment of adopting new technologies, so please feel free to 'judge', 'criticise', or more plausibly - contribute!  Let's make it a good piece of work.


## Why NGme

**Goals we want to achieve**
wer


## Concepts

* It's a web application, so unavoidably it requires functionality to support it; 
* It's Angular 2, so everything is about single page therefore a clever way of routing UIs should be looked after;
* It needs to serve most general application features/needs, so ready-made app modules should be created
* It should be highly extensible anf flexible, so developers can easily drop the libraries to their own project and extend/customize without worrying future updates of NGme will destroy their own project (hints: I meant frequent minor updates - not when it happens to be revolutionary major upgrades);

## Concept 1. Layouts
## Concept 2. Views
## Concept 3. Modules
 Modules includes 
 - **services**: all services and functionality that can compose a feature serving a need in business context. They implements **IOEmeModule** interface and are simply sets of normal classes.
 - **routes**: url routing should be part of Module's responsibility, they are decoupled from views but each route does need to have a specific View associated at definition. (Ideally they should be decoupled and dynamically linked somehow)
 - **providers**: any external/internal dependencies that are required for serving the Module

## Concept 4. Services
 
## Module Blueprints


 | Module  | Idea | Status | Make a wish 
 |---|
 | app.core.framework  | global settings and core initializer of the application | 1.0.0 |
 | app.views | defines all visible views of the app | 1.0.0 |


## Update Logs

27/06/2016 - Build the first draft of framework structure