// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map:any = {
    '@angular2-material': 'vendor/@angular2-material',
    'angular2-cookie': 'vendor/angular2-cookie'
};

/** User packages configuration. */
const packages:any = {};

const materialPkgs:string[] = [
    'button',
    'card',
    'checkbox',
    'core',
    'grid-list',
    'icon',
    'input',
    'list',
    'progress-bar',
    'progress-circle',
    'radio',
    'sidenav',
    'slide-toggle',
    'tabs',
    'toolbar'
];
materialPkgs.forEach((pkg) => {
    packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});


////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels:string[] = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/service',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',

    // Thirdparty barrels.
    'rxjs',

    // App specific barrels.
    'app',
    'app/shared',
    /** @cli-barrel */
];

const cliSystemConfigPackages:any = {};
barrels.forEach((barrelName:string) => {
    cliSystemConfigPackages[barrelName] = {main: 'index'};
});

cliSystemConfigPackages['angular2-cookie'] = {main: 'core'};


/** Type declaration for ambient System. */
declare var System:any;

// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs'
    },
    packages: cliSystemConfigPackages,
    defaultJSExtensions: true
});

// Apply the user's configuration.
System.config({map, packages});
