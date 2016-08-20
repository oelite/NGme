# OEme - An Angular Material 2 based application template

This project was initiated as a playground for building next generation UI framework of our internal projects. You can consider it as an Angular 2 admin dashboard template, or an example of fully working web app (no server logic & api & database provided obviously).

Feel free to play and contribute!

## Disclaimer

I'm a C# developer, **not** a javascript-born guru; although with extensive level experience/knowledge of front-end development, I am no near as an expert bird flying among Angular, Angular 2 or any front-end/client-side driven technologies. 

This project started as an experiment of adopting new technologies, so please feel free to 'judge', 'criticise', or more plausibly - contribute!  Let's make it a good piece of work.

##### Therefore

This is a project under development, plus it' done by a 'junior', plus it's a playground. So whether you want to help me learning or contribute to make the project fantastic, it's really at your interests. :)


## Why OEme

**Goals we want to achieve**
Single app framework that'll fit most business application needs.


## Concepts

* It's a web application, so unavoidably it requires functionality to support it; 
* It's Angular 2, so everything is about single page therefore a clever way of routing UIs should be looked after;
* It needs to serve most general application features/needs, so ready-made app modules should be created
* It should be highly extensible anf flexible, so developers can easily drop the libraries to their own project and extend/customize without worrying future updates of NGme will destroy their own project (hints: I meant frequent minor updates - not when it happens to be revolutionary major upgrades);

## Concept 1. Views
Views - in essence, they are just visible 'screens' on devices in front of us, regardless type of devices, human eyes can only see 1 screen at a time (so is the device' capability...); we can consider the following types of Views:
* **Page** - A whole screen of what we see on the device when the application is running, we don' see anything else but the Page
* **Section** - Consider this as views that compose a Page. The concept here is a visual of a page is composed by a set of view sections, nothing else.
* **Partial Views** - Consider this as views that are conditionally displayed as sections of a page. (Such as a dialog pop-up, or a section of the page where multiple views are switched from one to another based on business logics)
* **Elements** - tiny little pieces of small views that compose the visual of a view. Consider it as 'User Controls' if you are familiar with the old programming Windows WinForm/ASP.NET form design in the good old days.
 
Views - without being put together by meaningful business logics or visual needs, they are just 'visible' assets of an application.
 
## Concept 2. Layouts
In my concept, there' just one layout. Which can be demonstrated as 5x5 table below (Consider the table as the layout and the 9 sections what defines a layout.)

* **1. Top Row**   - TopOuterSection: Normally used as Top Navigation Bar
* **2. First Column** - LeftOuterSection: Normally used as Left Navigation Bar
* **3. Last Column** - RightOuterSection: Normally used as Right Navigation Bar
* **4. 2nd Row Middle Column** - TopInnerSection: Normally used as Top Toolbar 
* **5. 2nd Column Middle Rows** - LeftInnerSection: Normally used as Left Navigation Toolkit 
* **6. Centre** - MainSection: Normally used for displaying main content
* **7. Last Column Middle Rows** - RightInnerSection: Normally used as Right Navigation Toolkit
* **8. Bottom Second Row** - BottomInnerSection: Normally used as content footer 
* **9. Bottom Row** BottomOuterSection: Normally used as Bottom Navigation Bar (or copyright etc.)

| 12 | 1 | 1 | 1 | 13 |
|---|---|---|---|---|
| 2 | 45 | 4 | 47 | 3 |
| 2 | 5 | 6 | 7 | 3 |
| 2 | 85 | 8 | 87 | 3 |
| 9 | 9 | 9 | 9 | 9 |

## Concept 3. Modules
 Modules includes 
 - **services**: all services and functionality that can compose a feature serving a need in business context. They implements **IOEmeModule** interface and are simply sets of normal classes.
 - **routes**: url routing should be part of Module's responsibility, they are decoupled from views but each route does need to have a specific View associated at definition. (Ideally they should be decoupled and dynamically linked somehow)
 - **providers**: any external/internal dependencies that are required for serving the Module

## Concept 4. Services
 
## Module Blueprints

| Module  | Idea | Version | Status |
|---|---|---|---|
| concept | proof of concept | 1.0.0-alpha | Toddler |
| app.core.framework  | global settings and core initializer of the application | 1.0.0-alpha | Toddler |
| app.core.abstractions | global entities that serves core features | 1.0.0-alpha | Infant |
| app.modules | defines all necessary modules/routes (i.e. built-in examples) | 1.0.0-alpha | Infant |
| app.views | defines all visible views of the app | 1.0.0 | Infant |

## UI Components

| Component  | Usage | Location | Dependencies | Status |
|---|---|---|---|---|
| oe-accordion | an accordion/left navigation menu/leveled list component | plugins/mdl/accordion | jQuery, mdl css, angular 2 material theming | adult |
| oe-backstretch | a simple backstretch jquery plugin wrapper in angular 2 | plugins/oeme/backstretch | jQuery, jquery.backstretch.min.js | adult |

## Update Logs
* 20/08/2015 - upgrade concept repo onto Angular 2, RC5 with extensive rewrite of components and framework structures
* 05/08/2015 - add new left nav component <oe-accordion></oe-accordion>
* 11/07/2016 - dynamic routing (masterpage + page), login page, api service 
* 01/07/2016 - Finally got the first view (home) working with 8-sides (4 outer + 4 inner) views surrounded the main content (screen) view
* 27/06/2016 - Build the first draft of framework structure