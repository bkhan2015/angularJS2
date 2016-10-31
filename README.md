# angularJS2
This is my first angularJS-2 project in GitHub
Tools to Install:
1. Visual Studio Code (https://code.visualstudio.com/Download?utm_expid=101350005-34.AJ9vUvoaRSGnAeC8Wd6bSw.0&utm_referrer=https%3A%2F%2Fcode.visualstudio.com%2Fupdates
2. Git (https://git-scm.com/)
3. Install GitHub desktop (https://desktop.github.com/) easy to commit your code into repository
Create a folder(ex: AngularJS2-App) for your project 
Open that project folder in Git Bash
Open your project folder in "Visual Studio Code"
Create another folder "app" inside your root project folder
Create your first file (package.json) outside of app folder
Add all dependency key for angularJS2 module, version, licence type, and so on.
create another configuration file tsconfig.json it will tell compiler to compile the typescript that is based on es5 which will support for all browser
create onr more config file systemjs.config and add code -- it's basicall bundle your all dependency and build your application
create file typings.json and add code - sometimes it's option 
$ npm Install - will install all node modules and typing folder --- sometimes typing folder doesn't create when you do "npm install" to create that folder follow below command:
$ npm install -g typings
$ typings install
Now create a new typscript file under app folder [app.module.ts]







