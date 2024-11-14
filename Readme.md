# Muteni-bank

Multi step form project

## Getting started
### Versions
```bash
Angular CLI: 18.2.11
Node: 22.11.0
Package Manager: npm 10.8.2
OS: linux x64

Angular: 18.2.11
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1802.11
@angular-devkit/build-angular   18.2.11
@angular-devkit/core            18.2.11
@angular-devkit/schematics      18.2.11
@schematics/angular             18.2.11
rxjs                            7.8.1
typescript                      5.5.4
zone.js                         0.14.10
```
### Commands

#### Run dev environnement
```bash
cd muteni-bank
npm install 
ng serve
```

#### Run Docker 
```bash
cd muteni-bank
npm install 
ng build
docker build -t muteni-bank .
docker run -d -p 80:80 muteni-bank
```