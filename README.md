# Justine Lileikis - Web developer portfolio

## Table of Contents
1. [Installing Dependencies](#installing-dependencies)
2. [Compiling for development](#compiling-for-development)
3. [Compiling for production](#compiling-for-production)
4. [Project File Structure](#project-file-structure)

## Installing Dependencies
1. Clone repo to your local
2. Install [Node](https://nodejs.org/en/) and [NPM](https://nodejs.org/en/download/)
3. Install Gulp globally with `npm install --global gulp`
4. Navigate to the project folder and install Gulp locally and dependencies: `npm install --only=dev`

That will install gulp locally for your project, and create the folder `node_modules/` with all dependencies installed. You never need to run this again (unless another dependency is added), and you don't need to touch `node_modules`.

## Compiling for development
1. Navigate to the project folder (in terminal) and run `gulp`. This compiles you SASS files into CSS and will watch for any changes and recompile on save. 
2. Open a new terminal window, navigate to the project folder and run `npm start`. This should start react and you should be able to access the project locally at http://localhost:3000/.

## Compiling for production
1. In the terminal, run this command `npm run deploy`. This command pushes your built file to the `gh-pagesbranch` on your remote repository.

## Project File Structure
1. Everything in the `api` folder is for the product data API. 
2. `build` is the production version of the project.
3. `sass` contains all SCSS files.
4. `src` contains all front end code for the project. 
5. `public` contains all project assets for production. 




